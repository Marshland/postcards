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
    path: '**',
    redirectTo: '/insert-postcard',
  },
];
