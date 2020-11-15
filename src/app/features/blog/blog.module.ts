import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { BlogRoutingModule } from './blog-routing.module';
import { FeedComponent } from './containers/feed/feed.component';
import { BlogPageComponent } from './pages/blog/blog.component';
import { BlogsComponent } from './ui/blogs/blogs.component';

@NgModule({
  declarations: [BlogPageComponent, BlogsComponent, FeedComponent],
  imports: [CommonModule, SharedModule, BlogRoutingModule],
})
export class BlogModule {}
