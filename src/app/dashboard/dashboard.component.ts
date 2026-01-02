import { ChangeDetectionStrategy, Component, computed, inject, ViewEncapsulation } from '@angular/core';
import { PostcardService } from '../postcard.service';
import type { ServiceType } from '../types';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  #postCardService = inject(PostcardService);
  #router = inject(Router);

  yearlyStats = computed(() => {
    const postcards = this.#postCardService.postcards();
    const stats = new Map<number, Map<number, number>>();

    // Process all years
    for (const year in postcards) {
      const yearNum = parseInt(year);
      const monthStats = new Map<number, number>();

      // Process all months in the year
      for (const month in postcards[year]) {
        const monthNum = parseInt(month);
        let monthTotal = 0;

        // Sum up all postcards in the month
        for (const day in postcards[year][month]) {
          for (const serviceType in postcards[year][month][day]) {
            monthTotal += postcards[year][month][day][serviceType as ServiceType]?.length ?? 0;
          }
        }

        monthStats.set(monthNum, monthTotal);
      }

      stats.set(yearNum, monthStats);
    }

    return stats;
  });

  getMonthName(month: number): string {
    return new Date(2000, month - 1, 1).toLocaleString('en-US', { month: 'long' });
  }

  getSortedYears(): number[] {
    return Array.from(this.yearlyStats().keys()).sort((a, b) => b - a);
  }

  getSortedMonths(year: number): number[] {
    const months = this.yearlyStats().get(year);
    return months ? Array.from(months.keys()).sort((a, b) => a - b) : [];
  }

  getMonthTotal(year: number, month: number): number {
    return this.yearlyStats().get(year)?.get(month) ?? 0;
  }

  getYearTotal(year: number): number {
    const months = this.yearlyStats().get(year);
    if (!months) return 0;
    return Array.from(months.values()).reduce((sum, count) => sum + count, 0);
  }

  navigateToStatistics(year: number, month: number): void {
    this.#router.navigate(['/statistics'], {
      queryParams: { year, month },
    });
  }
}
