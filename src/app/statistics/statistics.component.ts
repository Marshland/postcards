import type { KeyValue } from '@angular/common';
import { KeyValuePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, resource, signal, ViewEncapsulation } from '@angular/core';
import type { Rating, YearPostcards } from '../types';
import { assertType } from '../utils/utils';
import type { ServiceType } from './../types';

@Component({
  selector: 'app-statistics',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
  imports: [KeyValuePipe],
})
export class StatisticsComponent {
  total = 0;
  totalClients = 0;
  totalFriends = 0;
  totalSocial = 0;

  percentageClients = '';
  percentageFriends = '';
  percentageSocial = '';

  statisticDays: Record<
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
  > = {};

  year = signal(2024);
  month = signal(1);

  jsonResource = resource({
    request: () => ({ year: this.year(), month: this.month() }),
    loader: async ({ request: { year, month } }) => {
      const response = await fetch(`/data/${year}/${month}.json`);
      return response.json();
    },
  });

  constructor() {
    effect(() => {
      const data = this.jsonResource.value();
      if (!data || this.jsonResource.isLoading()) return;

      this.calculate(data);
    });
  }

  calculate(data: YearPostcards) {
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
            this.total += serviceTypeData?.length ?? 0;
            for (const postCard of serviceTypeData ?? []) {
              if (postCard.howKnowUs === 'client') {
                this.totalClients++;
              } else if (postCard.howKnowUs === 'friend') {
                this.totalFriends++;
              } else if (postCard.howKnowUs === 'social') {
                this.totalSocial++;
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
          this.statisticDays[`${day}/${month}/${year}`] = statisticDay;
        }

        this.percentageClients = ((this.totalClients / this.total) * 100).toFixed(1);
        this.percentageFriends = ((this.totalFriends / this.total) * 100).toFixed(1);
        this.percentageSocial = ((this.totalSocial / this.total) * 100).toFixed(1);
      }
    }
  }

  // Order by ascending property value
  valueAscOrder<K, V>(a: KeyValue<K, V>, b: KeyValue<K, V>): number {
    return +a.key > +b.key ? 1 : +b.key > +a.key ? -1 : 0;
  }
}
