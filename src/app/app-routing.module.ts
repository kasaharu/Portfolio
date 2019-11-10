import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from './feature/activity/ui/activity/activity.component';
import { BlogsComponent } from './feature/blogs/blogs.component';
import { TopComponent } from './feature/top/top.component';

const routes: Routes = [
  { path: '', component: TopComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'activities', component: ActivityComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
