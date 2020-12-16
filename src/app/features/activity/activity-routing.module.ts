import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityPageComponent } from './pages/activity/activity.component';
import { OssListPageComponent } from './pages/oss-list/oss-list.component';
import { SlideComponent } from './pages/slide/slide.component';

const routes: Routes = [
  {
    path: '',
    component: ActivityPageComponent,
    children: [
      { path: '', redirectTo: 'slide', pathMatch: 'full' },
      { path: 'slide', component: SlideComponent },
      { path: 'oss', component: OssListPageComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivityRoutingModule {}
