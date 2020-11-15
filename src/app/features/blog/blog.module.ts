import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogPageComponent } from './pages/blog/blog.component';
import { BlogsComponent } from './ui/blogs/blogs.component';

@NgModule({
  declarations: [BlogPageComponent, BlogsComponent],
  imports: [CommonModule, SharedModule, BlogRoutingModule],
})
export class BlogModule {}
