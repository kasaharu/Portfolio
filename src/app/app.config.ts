import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // { provide: ErrorHandler, useValue: Sentry.createErrorHandler({ showDialog: true }) },
    // { provide: Sentry.TraceService, deps: [Router] },
    // { provide: APP_INITIALIZER, useFactory: () => () => {}, deps: [Sentry.TraceService], multi: true },
    provideHttpClient(withInterceptorsFromDi()),
  ],
};
