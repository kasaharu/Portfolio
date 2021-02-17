import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { InspectorModule } from '@ngneat/inspector';
import * as Sentry from '@sentry/angular';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    BrowserAnimationsModule,
    environment.production ? [] : InspectorModule.forRoot({ position: { top: 'auto', bottom: '20px' } }),
  ],
  providers: [
    { provide: ErrorHandler, useValue: Sentry.createErrorHandler({ showDialog: true }) },
    { provide: Sentry.TraceService, deps: [Router] },
    { provide: APP_INITIALIZER, useFactory: () => () => {}, deps: [Sentry.TraceService], multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
