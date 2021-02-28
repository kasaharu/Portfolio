import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExternalLinkModule } from '../../shared/external-link/external-link.module';
import { PageTitleModule } from '../../shared/page-title/page-title.module';
import { BlogRoutingModule } from './blog-routing.module';
import { ArticlesComponent } from './containers/articles/articles.component';
import { BlogPageComponent } from './pages/blog/blog.component';
import { ArticleComponent } from './ui/article/article.component';

@NgModule({
  declarations: [BlogPageComponent, ArticleComponent, ArticlesComponent],
  imports: [CommonModule, BlogRoutingModule, PageTitleModule, ExternalLinkModule],
})
export class BlogModule {}
