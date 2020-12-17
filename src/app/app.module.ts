import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgWorkboxComponentsModule } from '@kasaharu/ng-workbox/components';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './features/header/header.component';
import { LabModule } from './features/lab/lab.module';
import { TopPageComponent } from './features/top/pages/top/top.component';
import { FooterModule } from './shared/footer/footer.module';
import { SharedModule } from './shared/shared.module';
import * as Sentry from '@sentry/angular';

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
  providers: [{ provide: ErrorHandler, useValue: Sentry.createErrorHandler({ showDialog: true }) }],
  bootstrap: [AppComponent],
})
export class AppModule {}
