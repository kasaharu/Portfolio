import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PageTitleComponent } from '../../../../shared/page-title/page-title/page-title.component';
import { ArticleUsecase } from '../../applications/article.usecase';
import { ArticleComponent } from '../../ui/article/article.component';
import { DeprecatedArticleStore } from './article.store';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DeprecatedArticleStore, ArticleUsecase],
  standalone: true,
  imports: [PageTitleComponent, NgIf, NgFor, ArticleComponent, AsyncPipe],
})
export class ArticlesComponent implements OnInit {
  constructor(
    private readonly _componentStore: DeprecatedArticleStore,
    private _usecase: ArticleUsecase,
  ) {}
  articles$ = this._componentStore.blogItems$;

  ngOnInit(): void {
    this._usecase.fetchFeed();
  }
}
