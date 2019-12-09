import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ActivityRoutingModule } from './activity-routing.module';
import { ActivityComponent } from './ui/activity/activity.component';

@NgModule({
  declarations: [ActivityComponent],
  imports: [CommonModule, SharedModule, ActivityRoutingModule],
})
export class ActivityModule {}
