import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ArticleUsecase } from '../../applications/article.usecase';
import { FeedStore } from './article.store';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FeedStore, ArticleUsecase],
})
export class ArticleComponent implements OnInit {
  constructor(private readonly _componentStore: FeedStore, private _usecase: ArticleUsecase) {}
  articles$ = this._componentStore.blogItems$;

  ngOnInit(): void {
    this._usecase.fetchFeed();
  }
}
