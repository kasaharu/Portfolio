import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ArticlesComponent } from './containers/articles/articles.component';

@Component({
  template: '<app-articles></app-articles>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ArticlesComponent],
})
export class BlogPageComponent {}
