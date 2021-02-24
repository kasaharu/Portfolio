import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ArticleUsecase } from '../../applications/article.usecase';
import { ArticleStore } from './article.store';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ArticleStore, ArticleUsecase],
})
export class ArticleComponent implements OnInit {
  constructor(private readonly _componentStore: ArticleStore, private _usecase: ArticleUsecase) {}
  articles$ = this._componentStore.blogItems$;

  ngOnInit(): void {
    this._usecase.fetchFeed();
  }
}
