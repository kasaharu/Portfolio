import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from './features/activity/ui/activity/activity.component';
import { BlogsComponent } from './features/blogs/blogs.component';
import { LabComponent } from './features/lab/ui/lab/lab.component';
import { TopComponent } from './features/top/top.component';

const routes: Routes = [
  { path: '', component: TopComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'activities', component: ActivityComponent },
  { path: 'labs', component: LabComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
