import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './features/blogs/blogs.component';
import { LabComponent } from './features/lab/ui/lab/lab.component';
import { TopComponent } from './features/top/ui/top/top.component';

const routes: Routes = [
  { path: '', component: TopComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'activities', loadChildren: () => import('./features/activity/activity.module').then((m) => m.ActivityModule) },
  { path: 'labs', component: LabComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
