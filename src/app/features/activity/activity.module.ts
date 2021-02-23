import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { PageTitleModule } from '../../shared/page-title/page-title.module';
import { SharedModule } from '../../shared/shared.module';
import { ActivityRoutingModule } from './activity-routing.module';
import { ActivityPageComponent } from './pages/activity/activity.component';
import { OssPageComponent } from './pages/oss/oss.component';
import { SlidePageComponent } from './pages/slide/slide.component';

@NgModule({
  declarations: [ActivityPageComponent, OssPageComponent, SlidePageComponent],
  imports: [CommonModule, SharedModule, ActivityRoutingModule, MatTableModule, MatTabsModule, PageTitleModule],
})
export class ActivityModule {}
