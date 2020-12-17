import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { NgWorkboxComponentsModule } from '@kasaharu/ng-workbox/components';
import * as Sentry from '@sentry/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './features/header/header.component';
import { LabModule } from './features/lab/lab.module';
import { TopPageComponent } from './features/top/pages/top/top.component';
import { FooterModule } from './shared/footer/footer.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, TopPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgWorkboxComponentsModule,
    FooterModule,
    LabModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: ErrorHandler, useValue: Sentry.createErrorHandler({ showDialog: true }) },
    { provide: Sentry.TraceService, deps: [Router] },
    { provide: APP_INITIALIZER, useFactory: () => () => {}, deps: [Sentry.TraceService], multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
