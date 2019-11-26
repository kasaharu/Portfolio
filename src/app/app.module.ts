import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivityComponent } from './features/activity/ui/activity/activity.component';
import { BlogsComponent } from './features/blogs/blogs.component';
import { HeaderComponent } from './features/header/header.component';
import { LabsModule } from './features/labs/labs.module';
import { TopComponent } from './features/top/top.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, TopComponent, BlogsComponent, ActivityComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, LabsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
