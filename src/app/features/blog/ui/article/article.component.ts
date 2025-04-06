import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgFor, DatePipe } from '@angular/common';
import { Article } from '../../domain/feed';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NgFor, DatePipe]
})
export class ArticleComponent {
  @Input() feedItem!: Article;
}
