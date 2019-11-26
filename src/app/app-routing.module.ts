import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from './features/activity/ui/activity/activity.component';
import { BlogsComponent } from './features/blogs/blogs.component';
import { TopComponent } from './features/top/top.component';

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
