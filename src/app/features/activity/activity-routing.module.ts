import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityPageComponent } from './pages/activity/activity.component';
import { OssPageComponent } from './pages/oss/oss.component';
import { SlidePageComponent } from './pages/slide/slide.component';

const routes: Routes = [
  {
    path: '',
    component: ActivityPageComponent,
    children: [
      { path: '', redirectTo: 'slide', pathMatch: 'full' },
      { path: 'slide', component: SlidePageComponent },
      { path: 'oss', component: OssPageComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivityRoutingModule {}
