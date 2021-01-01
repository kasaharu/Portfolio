import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopPageComponent } from './features/top/pages/top/top.component';

const routes: Routes = [
  { path: '', component: TopPageComponent },
  { path: 'blogs', loadChildren: () => import('./features/blog/blog.module').then((m) => m.BlogModule) },
  { path: 'activities', loadChildren: () => import('./features/activity/activity.module').then((m) => m.ActivityModule) },
  { path: 'labs', loadChildren: () => import('./features/lab/lab.module').then((m) => m.LabModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
