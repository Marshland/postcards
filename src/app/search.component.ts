import {
  Component,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { postCard, postCards } from './types';

@Component({
  selector: 'search',
  standalone: true,
  templateUrl: './search.component.html',
  encapsulation: ViewEncapsulation.None,
  imports: [ReactiveFormsModule],
})
export class SearchComponent {
  @Output() results = new EventEmitter<postCard[]>();

  currentDate = new Date();
  minYear = this.currentDate.getFullYear() - 1;
  maxYear = this.currentDate.getFullYear();

  fb = new FormBuilder();
  form = this.fb.nonNullable.group({
    year: [
      this.currentDate.getFullYear(),
      [
        Validators.required,
        Validators.min(this.minYear),
        Validators.max(this.maxYear),
      ],
    ],
    month: [
      this.currentDate.getMonth() + 1,
      [Validators.required, Validators.min(0), Validators.max(12)],
    ],
    day: [
      this.currentDate.getDate(),
      [Validators.required, Validators.min(0), Validators.max(31)],
    ],
    lunchServiceType: true,
    dinnerServiceType: true,
    unknownServiceType: true,
    knowSocial: true,
    knowFriends: true,
    client: true,
  });

  protected filter() {
    const postCards = JSON.parse(
      localStorage.getItem('postCards') ?? '{}'
    ) as postCards;

    const {
      year,
      month,
      day,
      lunchServiceType,
      dinnerServiceType,
      unknownServiceType,
      knowSocial,
      knowFriends,
      client,
    } = this.form.getRawValue();

    const data: postCard[] = [];
    let filteredData = {};
    let filteredMonth = [];

    if (!(postCards as any)[year]) return;
    filteredData = (postCards as any)[year];

    if (month > 0) {
      if (!(filteredData as any)[month]) return;
      filteredMonth.push((filteredData as any)[month]);
    } else {
      for (const month in filteredData) {
        filteredMonth.push((filteredData as any)[month]);
      }
    }

    for (const monthObj of filteredMonth) {
      for (const dayOfMonth in monthObj) {
        if (day > 0 && day !== +dayOfMonth) continue;

        for (const serviceType in monthObj[day]) {
          if (
            (lunchServiceType && serviceType === 'lunch') ||
            (dinnerServiceType && serviceType === 'dinner') ||
            (unknownServiceType && serviceType === 'unknown')
          ) {
            const allPostCards = monthObj[day][serviceType].filter(
              (postCard: Partial<postCard>) => {
                if (knowSocial && postCard.howKnowUs === 'social') return true;
                if (knowFriends && postCard.howKnowUs === 'friend') return true;
                if (client && postCard.howKnowUs === 'client') return true;
                return false;
              }
            );

            for (const postCard of allPostCards) {
              data.push({
                ...postCard,
                serviceType,
                year,
                month,
                day: +dayOfMonth,
              });
            }
          }
        }
      }
    }

    console.log(data);
    this.results.emit(data);
  }
}
