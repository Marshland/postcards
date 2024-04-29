import { KeyValuePipe, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  signal,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardComponent } from './card.component';
import { SearchComponent } from './search.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { HowKnowUs, ServiceType, postCard, postCards } from './types';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [
    ReactiveFormsModule,
    KeyValuePipe,
    SearchComponent,
    CardComponent,
    StatisticsComponent,
    NgIf,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  $showNotifications = signal(false);
  $showStats = signal(false);

  $postCards = JSON.parse(
    localStorage.getItem('postCards') ?? '{}'
  ) as postCards;

  $filteredCards = signal<postCard[]>([]);
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
      [Validators.required, Validators.min(1), Validators.max(12)],
    ],
    day: [
      this.currentDate.getDate(),
      [Validators.required, Validators.min(1), Validators.max(31)],
    ],
    serviceType: ['lunch' as ServiceType],
    food: [5, [Validators.required, Validators.min(1), Validators.max(5)]],
    service: [5, [Validators.required, Validators.min(1), Validators.max(5)]],
    location: [5, [Validators.required, Validators.min(1), Validators.max(5)]],
    hospitality: [
      5,
      [Validators.required, Validators.min(1), Validators.max(5)],
    ],
    howKnowUs: ['client' as HowKnowUs],
  });

  onSubmit() {
    const {
      year,
      month,
      day,
      serviceType,
      food,
      service,
      location,
      hospitality,
      howKnowUs,
    } = this.form.getRawValue();

    if (!(this.$postCards as any)[year]) {
      (this.$postCards as any)[year] = {};
    }
    if (!(this.$postCards as any)[year][month]) {
      (this.$postCards as any)[year][month] = {};
    }
    if (!(this.$postCards as any)[year][month][day]) {
      (this.$postCards as any)[year][month][day] = {};
    }
    if (!(this.$postCards as any)[year][month][day][serviceType]) {
      (this.$postCards as any)[year][month][day][serviceType] = [];
    }
    (this.$postCards as any)[year][month][day][serviceType].push({
      food,
      service,
      location,
      hospitality,
      howKnowUs,
    });

    localStorage.setItem('postCards', JSON.stringify(this.$postCards));

    this.form.reset({
      year,
      month,
      day,
      serviceType,
      food: 5,
      service: 5,
      location: 5,
      hospitality: 5,
      howKnowUs,
    });

    this.$showNotifications.set(true);

    (document.querySelector('[formcontrolname="day"]')! as HTMLElement).focus();

    setTimeout(() => {
      this.$showNotifications.set(false);
    }, 1000);
  }

  toggleStats() {
    this.$showStats.set(!this.$showStats());
  }

  deleteCard(card: postCard) {
    const { year, month, day, serviceType } = card;
    const index = (this.$postCards as any)[year][month][day][
      serviceType
    ].findIndex((c: postCard) => c === card);
    (this.$postCards as any)[year][month][day][serviceType].splice(index, 1);
    localStorage.setItem('postCards', JSON.stringify(this.$postCards));
  }
}
