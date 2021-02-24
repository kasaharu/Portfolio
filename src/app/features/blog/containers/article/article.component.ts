import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FeedUsecase } from '../../applications/feed.usecase';
import { FeedStore } from './article.store';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FeedStore, FeedUsecase],
})
export class ArticleComponent implements OnInit {
  constructor(private readonly _componentStore: FeedStore, private _usecase: FeedUsecase) {}
  articles$ = this._componentStore.blogItems$;

  ngOnInit(): void {
    this._usecase.fetchFeed();
  }
}
