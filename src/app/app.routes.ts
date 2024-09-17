import { Routes } from '@angular/router';
import { TopPageComponent } from './features/top/top.component';

export const routes: Routes = [
  // { path: '', loadChildren: () => import('./features/top/top.module').then((m) => m.TopModule) },
  { path: '', component: TopPageComponent },
  { path: 'blogs', loadComponent: () => import('./features/blog/pages/blog/blog.component').then((m) => m.BlogPageComponent) },
  { path: 'activities', loadChildren: () => import('./features/activity/activity.module').then((m) => m.ActivityModule) },
  { path: 'labs', loadChildren: () => import('./features/lab/lab.module').then((m) => m.LabModule) },
];
