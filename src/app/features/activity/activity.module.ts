import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../../shared/shared.module';
import { ActivityRoutingModule } from './activity-routing.module';
import { ActivityComponent } from './ui/activity/activity.component';
import { OssListComponent } from './ui/oss-list/oss-list.component';

@NgModule({
  declarations: [ActivityComponent, OssListComponent],
  imports: [CommonModule, SharedModule, ActivityRoutingModule, MatTableModule],
})
export class ActivityModule {}
