import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageTitleModule } from '../../shared/page-title/page-title.module';
import { SharedModule } from '../../shared/shared.module';
import { BlogRoutingModule } from './blog-routing.module';
import { FeedComponent } from './containers/feed/feed.component';
import { BlogPageComponent } from './pages/blog/blog.component';
import { BlogsComponent } from './ui/blogs/blogs.component';
import { FeedItemComponent } from './ui/feed-item/feed-item.component';

@NgModule({
  declarations: [BlogPageComponent, BlogsComponent, FeedComponent, FeedItemComponent],
  imports: [CommonModule, SharedModule, BlogRoutingModule, PageTitleModule],
})
export class BlogModule {}
