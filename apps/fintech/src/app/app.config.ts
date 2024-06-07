import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withDebugTracing,
} from '@angular/router';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    // provideRouter(appRoutes, withDebugTracing()),
    provideRouter(appRoutes, withComponentInputBinding()),
  ],
};
