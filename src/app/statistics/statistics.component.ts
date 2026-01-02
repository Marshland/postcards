import type { KeyValue } from '@angular/common';
import { KeyValuePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, resource, signal, ViewEncapsulation } from '@angular/core';
import type { Rating, YearPostcards } from '../types';
import { assertType } from '../utils/utils';
import type { ServiceType } from './../types';
import { PostcardService } from '../postcard.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-statistics',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
  imports: [KeyValuePipe, FormsModule],
  standalone: true,
})
export class StatisticsComponent {
  total = signal(0);
  totalClients = signal(0);
  totalFriends = signal(0);
  totalSocial = signal(0);

  percentageClients = signal('');
  percentageFriends = signal('');
  percentageSocial = signal('');

  statisticDays = signal<
    Record<
      string,
      Record<
        ServiceType,
        {
          food: Record<Rating, number>;
          foodPercentage: Record<Rating, string>;
          service: Record<Rating, number>;
          servicePercentage: Record<Rating, string>;
          location: Record<Rating, number>;
          locationPercentage: Record<Rating, string>;
          hospitality: Record<Rating, number>;
          hospitalityPercentage: Record<Rating, string>;
        }
      >
    >
  >({});

  #postCardService = inject(PostcardService);
  #route = inject(ActivatedRoute);
  #router = inject(Router);

  year = signal('');
  month = signal('');

  jsonResource = resource({
    params: () => ({ year: this.year(), month: this.month() }),
    loader: async ({ params: { year, month } }) => {
      if (!year || !month) return;
      if (!this.#postCardService.loadStatisticsFromLocal) {
        const response = await fetch(`assets/data/${year}/${month.toString().padStart(2, '0')}.json`);
        return response.json();
      }

      return this.#postCardService.filterPostcards(+year, +month);
    },
  });

  constructor() {
    // Handle query parameters
    const params = this.#route.snapshot.queryParams;
    if (params['year'] && params['month']) {
      const yearStr = params['year'].toString();
      const monthStr = params['month'].toString().padStart(2, '0');
      this.year.set(yearStr);
      this.month.set(monthStr);
    }

    // Handle data loading and calculation
    effect(() => {
      const data = this.jsonResource.value();
      if (!data || this.jsonResource.isLoading()) return;

      this.#calculate(data);
    });
  }

  protected onSelectMonthChange(month: string) {
    this.month.set(month);
    this.#updateQueryParams();
    this.#reset();
  }

  protected onSelectYearChange(year: string) {
    this.year.set(year);
    this.#updateQueryParams();
    this.#reset();
  }

  #updateQueryParams() {
    const year = this.year();
    const month = this.month();

    if (year && month) {
      this.#router.navigate([], {
        relativeTo: this.#route,
        queryParams: { year, month },
        queryParamsHandling: 'merge',
      });
    } else {
      this.#router.navigate([], {
        relativeTo: this.#route,
        queryParams: {},
      });
    }
  }

  #reset() {
    this.total.set(0);
    this.totalClients.set(0);
    this.totalFriends.set(0);
    this.totalSocial.set(0);
    this.percentageClients.set('');
    this.percentageFriends.set('');
    this.percentageSocial.set('');
    this.statisticDays.set({});
  }

  #calculate(data: YearPostcards) {
    for (const year in data) {
      const yearData = data[year];
      for (const month in yearData) {
        const monthData = yearData[month];
        for (const day in monthData) {
          const dayData = monthData[day];

          const statisticDay = {
            lunch: {
              food: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
              foodPercentage: {
                1: '0.0',
                2: '0.0',
                3: '0.0',
                4: '0.0',
                5: '0.0',
              },
              service: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
              servicePercentage: {
                1: '0.0',
                2: '0.0',
                3: '0.0',
                4: '0.0',
                5: '0.0',
              },
              location: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
              locationPercentage: {
                1: '0.0',
                2: '0.0',
                3: '0.0',
                4: '0.0',
                5: '0.0',
              },
              hospitality: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
              hospitalityPercentage: {
                1: '0.0',
                2: '0.0',
                3: '0.0',
                4: '0.0',
                5: '0.0',
              },
            },
            dinner: {
              food: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
              foodPercentage: {
                1: '0.0',
                2: '0.0',
                3: '0.0',
                4: '0.0',
                5: '0.0',
              },
              service: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
              servicePercentage: {
                1: '0.0',
                2: '0.0',
                3: '0.0',
                4: '0.0',
                5: '0.0',
              },
              location: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
              locationPercentage: {
                1: '0.0',
                2: '0.0',
                3: '0.0',
                4: '0.0',
                5: '0.0',
              },
              hospitality: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
              hospitalityPercentage: {
                1: '0.0',
                2: '0.0',
                3: '0.0',
                4: '0.0',
                5: '0.0',
              },
            },
            unknown: {
              food: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
              foodPercentage: {
                1: '0.0',
                2: '0.0',
                3: '0.0',
                4: '0.0',
                5: '0.0',
              },
              service: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
              servicePercentage: {
                1: '0.0',
                2: '0.0',
                3: '0.0',
                4: '0.0',
                5: '0.0',
              },
              location: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
              locationPercentage: {
                1: '0.0',
                2: '0.0',
                3: '0.0',
                4: '0.0',
                5: '0.0',
              },
              hospitality: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
              hospitalityPercentage: {
                1: '0.0',
                2: '0.0',
                3: '0.0',
                4: '0.0',
                5: '0.0',
              },
            },
          };
          for (const serviceType in dayData) {
            assertType<ServiceType>(serviceType);
            const serviceTypeData = dayData[serviceType];
            this.total.update((value) => value + (serviceTypeData?.length ?? 0));

            for (const postCard of serviceTypeData ?? []) {
              if (postCard.howKnowUs === 'client') {
                this.totalClients.update((value) => value + 1);
              } else if (postCard.howKnowUs === 'friend') {
                this.totalFriends.update((value) => value + 1);
              } else if (postCard.howKnowUs === 'social') {
                this.totalSocial.update((value) => value + 1);
              }

              statisticDay[serviceType].food[postCard.food]++;
              statisticDay[serviceType].service[postCard.service]++;
              statisticDay[serviceType].location[postCard.location]++;
              statisticDay[serviceType].hospitality[postCard.hospitality]++;
            }
            for (const rating in statisticDay[serviceType].food) {
              const ratingNumber = +rating as Rating;
              statisticDay[serviceType].foodPercentage[ratingNumber] = (
                (statisticDay[serviceType].food[ratingNumber] / (serviceTypeData?.length ?? 0)) *
                100
              ).toFixed(1);
            }
            for (const rating in statisticDay[serviceType].service) {
              const ratingNumber = +rating as Rating;
              statisticDay[serviceType].servicePercentage[ratingNumber] = (
                (statisticDay[serviceType].service[ratingNumber] / (serviceTypeData?.length ?? 0)) *
                100
              ).toFixed(1);
            }
            for (const rating in statisticDay[serviceType].location) {
              const ratingNumber = +rating as Rating;
              statisticDay[serviceType].locationPercentage[ratingNumber] = (
                (statisticDay[serviceType].location[ratingNumber] / (serviceTypeData?.length ?? 0)) *
                100
              ).toFixed(1);
            }
            for (const rating in statisticDay[serviceType].hospitality) {
              const ratingNumber = +rating as Rating;
              statisticDay[serviceType].hospitalityPercentage[ratingNumber] = (
                (statisticDay[serviceType].hospitality[ratingNumber] / (serviceTypeData?.length ?? 0)) *
                100
              ).toFixed(1);
            }
          }
          this.statisticDays.update((value) => {
            value[`${day}/${month}/${year}`] = statisticDay;
            return value;
          });
        }

        this.percentageClients.set(((this.totalClients() / this.total()) * 100).toFixed(1));
        this.percentageFriends.set(((this.totalFriends() / this.total()) * 100).toFixed(1));
        this.percentageSocial.set(((this.totalSocial() / this.total()) * 100).toFixed(1));
      }
    }
  }

  protected deleteCurrentMonth() {
    const year = this.year();
    const month = this.month();
    if (!year || !month) return;

    this.#postCardService.deleteMonth(+year, +month);
    this.jsonResource.reload();
  }

  // Order by ascending property value
  valueAscOrder<K, V>(a: KeyValue<K, V>, b: KeyValue<K, V>): number {
    return +a.key > +b.key ? 1 : +b.key > +a.key ? -1 : 0;
  }
}
