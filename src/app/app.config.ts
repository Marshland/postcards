import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideExperimentalZonelessChangeDetection, type ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(withFetch()), provideExperimentalZonelessChangeDetection()],
};
