import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Article } from '../../domain/feed';
import { NgFor, DatePipe } from '@angular/common';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgFor, DatePipe],
})
export class ArticleComponent {
  @Input() feedItem!: Article;
}
