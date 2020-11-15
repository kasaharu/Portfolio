import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogPageComponent } from './pages/blog/blog.component';
import { BlogsComponent } from './ui/blogs/blogs.component';

@NgModule({
  declarations: [BlogPageComponent, BlogsComponent],
  imports: [CommonModule, BlogRoutingModule],
})
export class BlogModule {}
