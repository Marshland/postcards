import { ChangeDetectionStrategy, Component, input, output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import type { ServiceType, YearPostcards } from './types';
import { assertType } from './utils/utils';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule],
})
export class SearchComponent {
  readonly postcards = input.required<YearPostcards>();
  readonly results = output<YearPostcards>();

  currentDate = new Date();
  minYear = this.currentDate.getFullYear() - 1;
  maxYear = this.currentDate.getFullYear();

  fb = new FormBuilder();
  form = this.fb.nonNullable.group({
    year: [
      this.currentDate.getFullYear(),
      [Validators.required, Validators.min(this.minYear), Validators.max(this.maxYear)],
    ],
    month: [this.currentDate.getMonth() + 1, [Validators.required, Validators.min(0), Validators.max(12)]],
    day: [this.currentDate.getDate(), [Validators.required, Validators.min(0), Validators.max(31)]],
    lunch: true,
    dinner: true,
    unknown: true,
    social: true,
    friend: true,
    client: true,
  });

  protected filter() {
    const postcards = this.postcards();

    const filter = this.form.getRawValue();

    const result: YearPostcards = {};

    for (const [year, monthPostcards] of Object.entries(postcards)) {
      assertType<number>(year);
      if (filter.year && year !== filter.year) continue;

      for (const [month, dayPostcards] of Object.entries(monthPostcards)) {
        assertType<number>(month);
        if (filter.month && month !== filter.month) continue;

        for (const [day, servieTypePostcards] of Object.entries(dayPostcards)) {
          assertType<number>(day);
          if (filter.day && day !== filter.day) continue;

          for (const [service, postcards] of Object.entries(servieTypePostcards)) {
            assertType<ServiceType>(service);
            if (filter[service] === false) continue;

            for (const postcard of postcards) {
              if (filter[postcard.howKnowUs] === false) return;

              if (!result[year]) result[year] = {};
              if (!result[year][month]) result[year][month] = {};
              if (!result[year][month][day]) result[year][month][day] = {};
              if (!result[year][month][day][service]) result[year][month][day][service] = [];

              result[year][month][day][service].push(postcard);
            }
          }
        }
      }

      this.results.emit(result);
    }
  }
}
