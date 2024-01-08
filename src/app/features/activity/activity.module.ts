import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';

import { ActivityRoutingModule } from './activity-routing.module';
import { ActivityPageComponent } from './pages/activity/activity.component';
import { OssPageComponent } from './pages/oss/oss.component';
import { SlidePageComponent } from './pages/slide/slide.component';

@NgModule({
  imports: [
    CommonModule,
    ActivityRoutingModule,
    MatTableModule,
    MatTabsModule,
    ActivityPageComponent,
    OssPageComponent,
    SlidePageComponent,
  ],
})
export class ActivityModule {}
