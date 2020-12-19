import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import * as Sentry from '@sentry/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LabModule } from './features/lab/lab.module';
import { TopPageComponent } from './features/top/pages/top/top.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, TopPageComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, LabModule, CoreModule, SharedModule, BrowserAnimationsModule],
  providers: [
    { provide: ErrorHandler, useValue: Sentry.createErrorHandler({ showDialog: true }) },
    { provide: Sentry.TraceService, deps: [Router] },
    { provide: APP_INITIALIZER, useFactory: () => () => {}, deps: [Sentry.TraceService], multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
