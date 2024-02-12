import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: () => import('./features/top/top.module').then((m) => m.TopModule) },
  { path: 'blogs', loadChildren: () => import('./features/blog/blog.module').then((m) => m.BlogModule) },
  { path: 'activities', loadChildren: () => import('./features/activity/activity.module').then((m) => m.ActivityModule) },
  { path: 'labs', loadChildren: () => import('./features/lab/lab.module').then((m) => m.LabModule) },
];
