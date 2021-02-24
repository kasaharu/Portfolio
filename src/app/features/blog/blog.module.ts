import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExternalLinkModule } from '../../shared/external-link/external-link.module';
import { PageTitleModule } from '../../shared/page-title/page-title.module';
import { BlogRoutingModule } from './blog-routing.module';
import { ArticleComponent } from './containers/article/article.component';
import { BlogPageComponent } from './pages/blog/blog.component';
import { BlogsComponent } from './ui/blogs/blogs.component';
import { FeedItemComponent } from './ui/feed-item/feed-item.component';

@NgModule({
  declarations: [BlogPageComponent, BlogsComponent, FeedItemComponent, ArticleComponent],
  imports: [CommonModule, BlogRoutingModule, PageTitleModule, ExternalLinkModule],
})
export class BlogModule {}
