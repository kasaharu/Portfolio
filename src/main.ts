import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { environment } from './environments/environment';

// Sentry.init({
//   dsn: 'https://a64ddf4e943f4e37a318779ebc1108b6@o492848.ingest.sentry.io/5560941',
//   environment: environment.production ? 'production' : 'development',
//   integrations: [
//     // Registers and configures the Tracing integration,
//     // which automatically instruments your application to monitor its
//     // performance, including custom Angular routing instrumentation
//     new Integrations.BrowserTracing({
//       tracingOrigins: ['localhost'],
//       routingInstrumentation: Sentry.routingInstrumentation,
//     }),
//   ],
//
//   // Set tracesSampleRate to 1.0 to capture 100%
//   // of transactions for performance monitoring.
//   // We recommend adjusting this value in production
//   tracesSampleRate: 1.0,
// });

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
