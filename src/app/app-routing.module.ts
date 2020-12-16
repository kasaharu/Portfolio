import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LabComponent } from './features/lab/pages/lab/lab.component';
import { TopPageComponent } from './features/top/pages/top/top.component';

const routes: Routes = [
  { path: '', component: TopPageComponent },
  { path: 'blogs', loadChildren: () => import('./features/blog/blog.module').then((m) => m.BlogModule) },
  { path: 'activities', loadChildren: () => import('./features/activity/activity.module').then((m) => m.ActivityModule) },
  { path: 'labs', component: LabComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
