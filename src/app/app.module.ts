import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivityComponent } from './feature/activity/ui/activity/activity.component';
import { BlogsComponent } from './feature/blogs/blogs.component';
import { HeaderComponent } from './feature/header/header.component';
import { TopComponent } from './feature/top/top.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, TopComponent, BlogsComponent, ActivityComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
