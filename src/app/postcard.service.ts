import { computed, effect, Injectable, signal } from '@angular/core';
import type { Postcard, ServiceType, YearPostcards } from './types';
import { assertType } from './utils/utils';

@Injectable({ providedIn: 'root' })
export class PostcardService {
  #lastPhoneNumberNameAlphabet = 'V';
  #lastPhoneNumberNameNumber = 99;
  #maxPhoneNumberForLetter = 500;
  #alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  loadStatisticsFromLocal = true;
  postcards = signal(JSON.parse(localStorage.getItem('postcards') ?? '{}') as YearPostcards);
  lastInsertedPostcards = signal<Postcard[]>([]);
  totalPostcards = computed(() => {
    const postcards = this.postcards();
    return Object.values(postcards).reduce((acc, month) => {
      return (
        acc +
        Object.values(month).reduce((acc, day) => {
          return (
            acc +
            Object.values(day).reduce((acc, service) => {
              return (
                acc +
                Object.values(service).reduce((acc, serviceType) => {
                  return acc + serviceType.length;
                }, 0)
              );
            }, 0)
          );
        }, 0)
      );
    }, 0);
  });

  allPhoneNumbers = computed(() => {
    const postcards = this.postcards();
    const phoneNumbers = new Set<string>();

    for (const year in postcards) {
      for (const month in postcards[year]) {
        for (const day in postcards[year][month]) {
          for (const serviceType in postcards[year][month][day]) {
            assertType<ServiceType>(serviceType);
            for (const postcard of postcards[year][month][day][serviceType] ?? []) {
              if (postcard.phone && postcard.phone.length > 9) {
                phoneNumbers.add(postcard.phone);
              }
            }
          }
        }
      }
    }

    return phoneNumbers;
  });

  allEmailsWithAverage = computed(() => {
    const postcards = this.postcards();
    const emails = new Map<string, number>();

    for (const year in postcards) {
      for (const month in postcards[year]) {
        for (const day in postcards[year][month]) {
          for (const serviceType in postcards[year][month][day]) {
            assertType<ServiceType>(serviceType);
            for (const postcard of postcards[year][month][day][serviceType] ?? []) {
              if (postcard.email) {
                const average = (postcard.food + postcard.service + postcard.location + postcard.hospitality) / 4;
                emails.set(postcard.email, average);
              }
            }
          }
        }
      }
    }

    return emails;
  });

  emailsWithGoodAverage = computed(() => {
    const emails = this.allEmailsWithAverage();
    const emailsWithGoodAverage: string[] = [];
    for (const [email, average] of emails.entries()) {
      if (average >= 4) {
        emailsWithGoodAverage.push(email);
      }
    }
    return new Set(emailsWithGoodAverage);
  });

  allEmails = computed(() => {
    const emails = this.allEmailsWithAverage();
    return new Set(emails.keys());
  });

  // #region effects
  /* eslint-disable no-unused-private-class-members */
  #savePostcards = effect(() => {
    localStorage.setItem('postcards', JSON.stringify(this.postcards()));
  });

  /* eslint-enable no-unused-private-class-members */
  // #endregion effects

  reloadPostcards() {
    this.postcards.set(JSON.parse(localStorage.getItem('postcards') ?? '{}'));
  }

  addPostcard(postcard: Postcard) {
    const postCards = this.postcards();
    const { year, month, day, serviceType } = postcard;

    if (!postCards[year]) {
      postCards[year] = {};
    }
    if (!postCards[year][month]) {
      postCards[year][month] = {};
    }
    if (!postCards[year][month][day]) {
      postCards[year][month][day] = {};
    }
    if (!postCards[year][month][day][serviceType]) {
      postCards[year][month][day][serviceType] = [];
    }
    postCards[year][month][day][serviceType].push({
      food: postcard.food,
      service: postcard.service,
      location: postcard.location,
      hospitality: postcard.hospitality,
      howKnowUs: postcard.howKnowUs,
      email: postcard.email,
      phone: postcard.phone,
    });
    this.postcards.set({ ...postCards });
    this.#addLastInsertedPostcard(postcard);
  }

  deletePostcard(postcard: Postcard) {
    const postCards = this.postcards();
    const { year, month, day, serviceType } = postcard;
    const index = postCards[year][month][day][serviceType]?.findIndex((p) => p === postcard);

    if (index === undefined || index < 0) return;

    postCards[year][month][day][serviceType]?.splice(index, 1);
    this.postcards.set({ ...postCards });

    this.#removeLastInsertedPostcard(postcard);
  }

  exportPostcards() {
    const postcards = this.postcards();

    const blob = new Blob([JSON.stringify(postcards, undefined, 2)], { type: 'application/json' });
    this.downloadFile(blob, `postcards-${this.createDateStr()}.json`);

    this.postcards.set({});
  }

  reset() {
    this.postcards.set({});
  }

  async importPostcardsFromFile(event: Event, merge = false) {
    const target = event.target as HTMLInputElement;
    if (!target.files) return;

    if (!merge) {
      const file = target.files[0];
      if (!file) return;

      const filePostcards = await this.#readPostcardsFromFile(file);

      this.postcards.set(filePostcards);
      return;
    }

    const files = Array.from(target.files);
    if (files.length === 0) return;

    for (const file of files) {
      const filePostcards = await this.#readPostcardsFromFile(file);
      this.#importPostcards(filePostcards);
    }
  }

  filterPostcards(year: number, month: number): YearPostcards {
    const postcards = this.postcards();
    return {
      [year]: {
        [month]: postcards[year][month],
      },
    };
  }

  getVCard(phoneNumber: string): string {
    if (this.#lastPhoneNumberNameNumber < this.#maxPhoneNumberForLetter) {
      this.#lastPhoneNumberNameNumber++;
    } else {
      this.#lastPhoneNumberNameAlphabet = this.#alphabet[this.#alphabet.indexOf(this.#lastPhoneNumberNameAlphabet) + 1];
      this.#lastPhoneNumberNameNumber = 1;
    }

    return `BEGIN:VCARD
VERSION:2.1
N;CHARSET=UTF-8:;${this.#lastPhoneNumberNameAlphabet}${this.#lastPhoneNumberNameNumber};;;
FN;CHARSET=UTF-8: ${this.#lastPhoneNumberNameAlphabet}${this.#lastPhoneNumberNameNumber}
TEL;CELL:${phoneNumber}
END:VCARD`;
  }

  createDateStr() {
    const date = new Date();
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}_${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;
  }

  downloadFile(blob: Blob, filename: string) {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  #readPostcardsFromFile(file: File): Promise<YearPostcards> {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(JSON.parse(reader.result as string) as YearPostcards);
      };

      reader.readAsText(file);
    });
  }

  #importPostcards(importedPostcards: YearPostcards) {
    const postcards = this.postcards();

    for (const year in importedPostcards) {
      if (!postcards[year]) {
        postcards[year] = {};
      }

      for (const month in importedPostcards[year]) {
        if (!postcards[year][month]) {
          postcards[year][month] = {};
        }

        for (const day in importedPostcards[year][month]) {
          if (!postcards[year][month][day]) {
            postcards[year][month][day] = {};
          }

          for (const serviceType in importedPostcards[year][month][day]) {
            assertType<ServiceType>(serviceType);
            if (!postcards[year][month][day][serviceType]) {
              postcards[year][month][day][serviceType] = [];
            }

            postcards[year][month][day][serviceType].push(...(importedPostcards[year][month][day][serviceType] ?? []));
          }
        }
      }
    }

    this.postcards.set({ ...postcards });
  }

  #addLastInsertedPostcard(postcard: Postcard) {
    const lastInsertedPostcards = this.lastInsertedPostcards();
    lastInsertedPostcards.push(postcard);
    if (lastInsertedPostcards.length > 10) {
      lastInsertedPostcards.shift();
    }
    this.lastInsertedPostcards.set(lastInsertedPostcards);
  }

  #removeLastInsertedPostcard(postcard: Postcard) {
    const lastInsertedPostcards = this.lastInsertedPostcards();
    const index = lastInsertedPostcards.findIndex((card) => card === postcard);
    if (index < 0) return;

    lastInsertedPostcards.splice(index, 1);
    this.lastInsertedPostcards.set(lastInsertedPostcards);
  }
}
