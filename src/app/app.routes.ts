import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'statistics',
    loadComponent: () => import('./statistics/statistics.component').then((m) => m.StatisticsComponent),
  },
  {
    path: 'insert-postcard',
    loadComponent: () => import('./insert-postcard/insert-postcard.component').then((m) => m.CreatePostcardComponent),
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component').then((m) => m.DashboardComponent),
  },
  {
    path: 'phone-numbers',
    loadComponent: () => import('./phone-numbers/phone-numbers.component').then((m) => m.PhoneNumbersComponent),
  },
  {
    path: 'emails',
    loadComponent: () => import('./unique-emails/unique-emails.component').then((m) => m.UniqueEmailsComponent),
  },
  {
    path: '**',
    redirectTo: '/dashboard',
  },
];
