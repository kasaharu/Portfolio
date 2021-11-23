import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Article } from '../../domain/feed';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleComponent {
  @Input() feedItem!: Article;
}
