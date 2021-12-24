import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { Article, Feed } from '../../domain/feed';

@Injectable()
export class ArticleStore extends ComponentStore<Feed> {
  constructor() {
    super({ items: [] });
  }

  readonly blogItems$: Observable<Article[]> = this.select((state) => state.items);

  readonly setFeed = this.updater((_, feed: Feed) => {
    return { items: feed.items };
  });
}
