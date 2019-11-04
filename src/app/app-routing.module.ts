import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './feature/blogs/blogs.component';
import { TopComponent } from './feature/top/top.component';

const routes: Routes = [{ path: '', component: TopComponent }, { path: 'blogs', component: BlogsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
