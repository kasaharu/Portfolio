import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from '../../shared/shared.module';
import { ActivityRoutingModule } from './activity-routing.module';
import { ActivityPageComponent } from './pages/activity/activity.component';
import { OssListPageComponent } from './pages/oss-list/oss-list.component';
import { SlidePageComponent } from './pages/slide/slide.component';

@NgModule({
  declarations: [ActivityPageComponent, OssListPageComponent, SlidePageComponent],
  imports: [CommonModule, SharedModule, ActivityRoutingModule, MatTableModule, MatTabsModule],
})
export class ActivityModule {}
