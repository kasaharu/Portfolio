import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogPageComponent } from './pages/blog/blog.component';

@NgModule({
  declarations: [BlogPageComponent],
  imports: [CommonModule, BlogRoutingModule],
})
export class BlogModule {}
