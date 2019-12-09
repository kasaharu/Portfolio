import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from './ui/activity/activity.component';
import { OssListComponent } from './ui/oss-list/oss-list.component';

const routes: Routes = [{ path: '', component: ActivityComponent }, { path: 'oss', component: OssListComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivityRoutingModule {}
