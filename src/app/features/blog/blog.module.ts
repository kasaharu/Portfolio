import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BlogRoutingModule } from './blog-routing.module';
import { ArticlesComponent } from './containers/articles/articles.component';
import { BlogPageComponent } from './pages/blog/blog.component';
import { ArticleComponent } from './ui/article/article.component';

@NgModule({
  imports: [CommonModule, BlogRoutingModule, BlogPageComponent, ArticleComponent, ArticlesComponent],
})
export class BlogModule {}
