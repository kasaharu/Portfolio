import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivityComponent } from './features/activity/ui/activity/activity.component';
import { BlogsComponent } from './features/blogs/blogs.component';
import { HeaderComponent } from './features/header/header.component';
import { LabModule } from './features/lab/lab.module';
import { TopComponent } from './features/top/top.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, TopComponent, BlogsComponent, ActivityComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, LabModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
