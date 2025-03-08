import { computed, effect, Injectable, signal } from '@angular/core';
import type { Postcard, ServiceType, YearPostcards } from './types';
import { assertType } from './utils/utils';

@Injectable({ providedIn: 'root' })
export class PostcardService {
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
              if (postcard.phone) {
                phoneNumbers.add(postcard.phone);
              }
            }
          }
        }
      }
    }

    return phoneNumbers;
  });

  allEmails = computed(() => {
    const postcards = this.postcards();
    const emails = new Set<string>();

    for (const year in postcards) {
      for (const month in postcards[year]) {
        for (const day in postcards[year][month]) {
          for (const serviceType in postcards[year][month][day]) {
            assertType<ServiceType>(serviceType);
            for (const postcard of postcards[year][month][day][serviceType] ?? []) {
              if (postcard.email) {
                emails.add(postcard.email);
              }
            }
          }
        }
      }
    }

    return emails;
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
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    const date = new Date();
    const dateStr = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}_${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;
    a.download = `postcards-${dateStr}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();

    this.postcards.set({});
  }

  async importPostcardsFromFile(event: Event, merge = false) {
    const target = event.target as HTMLInputElement;
    if (!target.files) return;

    const file = target.files[0];
    if (!file) return;

    const filePostcards = await this.#readPostcardsFromFile(file);

    if (!merge) {
      this.postcards.set(filePostcards);
      return;
    }

    this.#importPostcards(filePostcards);
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
