import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ArticlesComponent } from '../../containers/articles/articles.component';

@Component({
  template: '<app-articles></app-articles>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ArticlesComponent],
})
export class BlogPageComponent {}
