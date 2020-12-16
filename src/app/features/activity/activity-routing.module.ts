import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from './pages/activity/activity.component';
import { OssListComponent } from './pages/oss-list/oss-list.component';
import { SlideComponent } from './pages/slide/slide.component';

const routes: Routes = [
  {
    path: '',
    component: ActivityComponent,
    children: [
      { path: '', redirectTo: 'slide', pathMatch: 'full' },
      { path: 'slide', component: SlideComponent },
      { path: 'oss', component: OssListComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivityRoutingModule {}
