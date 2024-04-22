import { KeyValue, KeyValuePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Rating, postCards } from '../types';
import { ServiceType } from './../types';

@Component({
  selector: 'app-statistics',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
  imports: [KeyValuePipe],
  host: {
    class: 'statistics',
  },
})
export class StatisticsComponent {
  data: postCards = {
    '2023': {
      '7': {
        '1': {
          dinner: [
            {
              food: 4,
              service: 5,
              location: 4,
              hospitality: 4,
              howKnowUs: 'friend',
            },
            {
              food: 2,
              service: 1,
              location: 5,
              hospitality: 4,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 4,
              service: 5,
              location: 5,
              hospitality: 4,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 4,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 4,
              service: 4,
              location: 3,
              hospitality: 4,
              howKnowUs: 'client',
            },
          ],
          lunch: [
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 4,
              service: 4,
              location: 4,
              hospitality: 4,
              howKnowUs: 'client',
            },
            {
              food: 2,
              service: 2,
              location: 2,
              hospitality: 2,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 3,
              hospitality: 5,
              howKnowUs: 'friend',
            },
          ],
        },
        '2': {
          dinner: [
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 1,
              service: 1,
              location: 1,
              hospitality: 1,
              howKnowUs: 'friend',
            },
            {
              food: 4,
              service: 4,
              location: 4,
              hospitality: 4,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 4,
              service: 4,
              location: 4,
              hospitality: 4,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 4,
              hospitality: 4,
              howKnowUs: 'friend',
            },
          ],
          lunch: [
            {
              food: 4,
              service: 4,
              location: 4,
              hospitality: 4,
              howKnowUs: 'friend',
            },
            {
              food: 4,
              service: 4,
              location: 4,
              hospitality: 4,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 4,
              service: 4,
              location: 4,
              hospitality: 4,
              howKnowUs: 'client',
            },
            {
              food: 4,
              service: 4,
              location: 4,
              hospitality: 4,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 3,
              service: 4,
              location: 5,
              hospitality: 4,
              howKnowUs: 'friend',
            },
            {
              food: 4,
              service: 2,
              location: 3,
              hospitality: 4,
              howKnowUs: 'friend',
            },
            {
              food: 4,
              service: 3,
              location: 4,
              hospitality: 3,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 1,
              service: 2,
              location: 3,
              hospitality: 2,
              howKnowUs: 'friend',
            },
            {
              food: 4,
              service: 4,
              location: 1,
              hospitality: 2,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
          ],
        },
        '4': {
          lunch: [
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'social',
            },
          ],
          dinner: [
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 4,
              service: 5,
              location: 4,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 4,
              service: 4,
              location: 4,
              hospitality: 4,
              howKnowUs: 'friend',
            },
            {
              food: 4,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
          ],
        },
        '5': {
          lunch: [
            {
              food: 4,
              service: 5,
              location: 4,
              hospitality: 4,
              howKnowUs: 'friend',
            },
            {
              food: 4,
              service: 4,
              location: 5,
              hospitality: 4,
              howKnowUs: 'social',
            },
            {
              food: 4,
              service: 5,
              location: 4,
              hospitality: 5,
              howKnowUs: 'client',
            },
          ],
          dinner: [
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 4,
              service: 4,
              location: 4,
              hospitality: 4,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
          ],
        },
        '6': {
          lunch: [
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
          ],
          dinner: [
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 4,
              service: 5,
              location: 3,
              hospitality: 5,
              howKnowUs: 'social',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
          ],
        },
        '7': {
          dinner: [
            {
              food: 4,
              service: 5,
              location: 4,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 4,
              service: 4,
              location: 4,
              hospitality: 4,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 4,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 4,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'social',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'social',
            },
          ],
          lunch: [
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
          ],
        },
        '8': {
          dinner: [
            {
              food: 4,
              service: 4,
              location: 4,
              hospitality: 4,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 3,
              service: 3,
              location: 3,
              hospitality: 3,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 4,
              service: 4,
              location: 4,
              hospitality: 4,
              howKnowUs: 'client',
            },
            {
              food: 4,
              service: 4,
              location: 4,
              hospitality: 4,
              howKnowUs: 'friend',
            },
            {
              food: 3,
              service: 3,
              location: 3,
              hospitality: 3,
              howKnowUs: 'friend',
            },
            {
              food: 4,
              service: 4,
              location: 4,
              hospitality: 4,
              howKnowUs: 'friend',
            },
          ],
          lunch: [
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 4,
              service: 5,
              location: 4,
              hospitality: 5,
              howKnowUs: 'friend',
            },
          ],
        },
        '9': {
          lunch: [
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 4,
              service: 4,
              location: 4,
              hospitality: 4,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 4,
              service: 4,
              location: 4,
              hospitality: 4,
              howKnowUs: 'friend',
            },
            {
              food: 4,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'social',
            },
          ],
          dinner: [
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
          ],
        },
        '11': {
          dinner: [
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'social',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 4,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
          ],
        },
        '12': {
          dinner: [
            {
              food: 4,
              service: 4,
              location: 5,
              hospitality: 3,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 4,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 4,
              service: 5,
              location: 4,
              hospitality: 5,
              howKnowUs: 'friend',
            },
          ],
          lunch: [
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 4,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 4,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
          ],
        },
        '13': {
          lunch: [
            {
              food: 4,
              service: 4,
              location: 4,
              hospitality: 4,
              howKnowUs: 'client',
            },
            {
              food: 4,
              service: 4,
              location: 4,
              hospitality: 4,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 3,
              hospitality: 4,
              howKnowUs: 'client',
            },
          ],
          dinner: [
            {
              food: 5,
              service: 4,
              location: 4,
              hospitality: 3,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 3,
              hospitality: 2,
              howKnowUs: 'client',
            },
          ],
        },
        '14': {
          dinner: [
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 4,
              service: 5,
              location: 5,
              hospitality: 4,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 4,
              service: 4,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
          ],
          lunch: [
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
          ],
        },
        '15': {
          dinner: [
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 4,
              service: 4,
              location: 3,
              hospitality: 4,
              howKnowUs: 'friend',
            },
            {
              food: 4,
              service: 3,
              location: 3,
              hospitality: 4,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 4,
              hospitality: 5,
              howKnowUs: 'client',
            },
          ],
          lunch: [
            {
              food: 4,
              service: 5,
              location: 4,
              hospitality: 4,
              howKnowUs: 'social',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
          ],
        },
        '16': {
          dinner: [
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 4,
              service: 4,
              location: 4,
              hospitality: 4,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'social',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 3,
              service: 4,
              location: 1,
              hospitality: 4,
              howKnowUs: 'social',
            },
            {
              food: 1,
              service: 5,
              location: 5,
              hospitality: 3,
              howKnowUs: 'social',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
          ],
          lunch: [
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 4,
              hospitality: 5,
              howKnowUs: 'client',
            },
          ],
        },
        '18': {
          lunch: [
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
          ],
          dinner: [
            {
              food: 4,
              service: 5,
              location: 4,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
          ],
        },
        '19': {
          dinner: [
            {
              food: 5,
              service: 4,
              location: 5,
              hospitality: 2,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 4,
              hospitality: 4,
              howKnowUs: 'friend',
            },
          ],
          lunch: [
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
          ],
        },
        '20': {
          lunch: [
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 4,
              service: 3,
              location: 5,
              hospitality: 4,
              howKnowUs: 'social',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'social',
            },
          ],
          dinner: [
            {
              food: 4,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 2,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
          ],
        },
        '21': {
          dinner: [
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'social',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
          ],
          lunch: [
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'social',
            },
          ],
        },
        '22': {
          dinner: [
            {
              food: 4,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 4,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 4,
              service: 4,
              location: 4,
              hospitality: 5,
              howKnowUs: 'social',
            },
            {
              food: 4,
              service: 4,
              location: 4,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 4,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 4,
              service: 3,
              location: 5,
              hospitality: 4,
              howKnowUs: 'social',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
          ],
          lunch: [
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'social',
            },
            {
              food: 4,
              service: 5,
              location: 3,
              hospitality: 5,
              howKnowUs: 'client',
            },
          ],
        },
        '23': {
          dinner: [
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
          ],
          lunch: [
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'social',
            },
          ],
        },
        '25': {
          lunch: [
            {
              food: 4,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 3,
              service: 5,
              location: 4,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 4,
              location: 4,
              hospitality: 4,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 4,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
          ],
          dinner: [
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 3,
              howKnowUs: 'social',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 3,
              hospitality: 5,
              howKnowUs: 'social',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 4,
              hospitality: 4,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
          ],
        },
        '26': {
          lunch: [
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'social',
            },
          ],
          dinner: [
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 4,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 4,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 4,
              hospitality: 4,
              howKnowUs: 'client',
            },
          ],
        },
        '27': {
          lunch: [
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 4,
              hospitality: 5,
              howKnowUs: 'friend',
            },
          ],
          dinner: [
            {
              food: 4,
              service: 5,
              location: 4,
              hospitality: 4,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 4,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 4,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 4,
              service: 5,
              location: 4,
              hospitality: 4,
              howKnowUs: 'friend',
            },
            {
              food: 4,
              service: 4,
              location: 4,
              hospitality: 4,
              howKnowUs: 'client',
            },
          ],
        },
        '28': {
          dinner: [
            {
              food: 4,
              service: 5,
              location: 4,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 4,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 4,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 3,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 4,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 4,
              service: 3,
              location: 4,
              hospitality: 3,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 3,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 4,
              service: 5,
              location: 4,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'social',
            },
            {
              food: 5,
              service: 4,
              location: 4,
              hospitality: 4,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 4,
              service: 5,
              location: 5,
              hospitality: 4,
              howKnowUs: 'client',
            },
            {
              food: 4,
              service: 2,
              location: 4,
              hospitality: 2,
              howKnowUs: 'friend',
            },
            {
              food: 4,
              service: 5,
              location: 2,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 3,
              service: 5,
              location: 4,
              hospitality: 3,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 3,
              location: 5,
              hospitality: 4,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 4,
              service: 4,
              location: 4,
              hospitality: 4,
              howKnowUs: 'client',
            },
            {
              food: 4,
              service: 3,
              location: 3,
              hospitality: 3,
              howKnowUs: 'friend',
            },
            {
              food: 4,
              service: 4,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
          ],
          lunch: [
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
          ],
        },
        '29': {
          lunch: [
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 4,
              service: 4,
              location: 4,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'social',
            },
            {
              food: 5,
              service: 5,
              location: 4,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'social',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
          ],
          dinner: [
            {
              food: 3,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 4,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 4,
              service: 4,
              location: 4,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 4,
              howKnowUs: 'client',
            },
            {
              food: 4,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 4,
              service: 4,
              location: 4,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 4,
              service: 4,
              location: 2,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 4,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 4,
              service: 5,
              location: 3,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
          ],
        },
        '30': {
          lunch: [
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 2,
              location: 5,
              hospitality: 4,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'social',
            },
            {
              food: 4,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 4,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 4,
              hospitality: 5,
              howKnowUs: 'social',
            },
          ],
          dinner: [
            {
              food: 4,
              service: 5,
              location: 4,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 4,
              service: 4,
              location: 4,
              hospitality: 4,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 4,
              service: 4,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 3,
              howKnowUs: 'friend',
            },
            {
              food: 5,
              service: 5,
              location: 5,
              hospitality: 5,
              howKnowUs: 'client',
            },
          ],
        },
      },
    },
  };

  total = 0;
  totalClients = 0;
  totalFriends = 0;
  totalSocial = 0;

  percentageClients = '';
  percentageFriends = '';
  percentageSocial = '';

  statisticDays: {
    [key: string]: Record<
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
    >;
  } = {};

  constructor() {
    this.calculate();
  }

  calculate() {
    for (const year in this.data) {
      const yearData = this.data[year];
      for (const month in yearData) {
        const monthData = yearData[month];
        for (const day in monthData) {
          const dayData = monthData[day];
          let totalOfTheDay = 0;
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
            totalOfTheDay += serviceTypeData?.length ?? 0;
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
                (statisticDay[serviceType].food[ratingNumber] /
                  (serviceTypeData?.length ?? 0)) *
                100
              ).toFixed(1);
            }
            for (const rating in statisticDay[serviceType].service) {
              const ratingNumber = +rating as Rating;
              statisticDay[serviceType].servicePercentage[ratingNumber] = (
                (statisticDay[serviceType].service[ratingNumber] /
                  (serviceTypeData?.length ?? 0)) *
                100
              ).toFixed(1);
            }
            for (const rating in statisticDay[serviceType].location) {
              const ratingNumber = +rating as Rating;
              statisticDay[serviceType].locationPercentage[ratingNumber] = (
                (statisticDay[serviceType].location[ratingNumber] /
                  (serviceTypeData?.length ?? 0)) *
                100
              ).toFixed(1);
            }
            for (const rating in statisticDay[serviceType].hospitality) {
              const ratingNumber = +rating as Rating;
              statisticDay[serviceType].hospitalityPercentage[ratingNumber] = (
                (statisticDay[serviceType].hospitality[ratingNumber] /
                  (serviceTypeData?.length ?? 0)) *
                100
              ).toFixed(1);
            }
          }
          this.statisticDays[`${day}/${month}/${year}`] = statisticDay;
        }

        this.percentageClients = (
          (this.totalClients / this.total) *
          100
        ).toFixed(1);
        this.percentageFriends = (
          (this.totalFriends / this.total) *
          100
        ).toFixed(1);
        this.percentageSocial = ((this.totalSocial / this.total) * 100).toFixed(
          1
        );
      }
    }
  }

  // Order by ascending property value
  valueAscOrder<K, V>(a: KeyValue<K, V>, b: KeyValue<K, V>): number {
    return +a.key > +b.key ? 1 : +b.key > +a.key ? -1 : 0;
  }
}

function assertType<T>(value: unknown): asserts value is T {
  return;
}

/*
for (const key5 in element4) {
  if (element4.hasOwnProperty(key5)) {
    const element5 = element4[key5];
    this.total +=
      element5.food +
      element5.service +
      element5.location +
      element5.hospitality;
  }
}
 */
