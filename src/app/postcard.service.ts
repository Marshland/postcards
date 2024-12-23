import { computed, effect, Injectable, signal } from '@angular/core';
import type { Postcard, YearPostcards } from './types';

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
