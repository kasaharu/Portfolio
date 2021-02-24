import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ArticleUsecase } from '../../applications/article.usecase';
import { ArticleStore } from './article.store';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ArticleStore, ArticleUsecase],
})
export class ArticlesComponent implements OnInit {
  constructor(private readonly _componentStore: ArticleStore, private _usecase: ArticleUsecase) {}
  articles$ = this._componentStore.blogItems$;

  ngOnInit(): void {
    this._usecase.fetchFeed();
  }
}
