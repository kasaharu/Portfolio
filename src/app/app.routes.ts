import { Routes } from '@angular/router';
import { TopPageComponent } from './features/top/top.component';

export const routes: Routes = [
  // { path: '', loadChildren: () => import('./features/top/top.module').then((m) => m.TopModule) },
  { path: '', component: TopPageComponent },
  { path: 'blogs', loadChildren: () => import('./features/blog/blog.module').then((m) => m.BlogModule) },
  { path: 'activities', loadChildren: () => import('./features/activity/activity.module').then((m) => m.ActivityModule) },
  { path: 'labs', loadChildren: () => import('./features/lab/lab.module').then((m) => m.LabModule) },
];
