import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgWorkboxComponentsModule } from '@kasaharu/ng-workbox/components';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogsComponent } from './features/blogs/blogs.component';
import { HeaderComponent } from './features/header/header.component';
import { LabModule } from './features/lab/lab.module';
import { TopComponent } from './features/top/ui/top/top.component';
import { FooterModule } from './shared/footer/footer.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, TopComponent, BlogsComponent],
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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
