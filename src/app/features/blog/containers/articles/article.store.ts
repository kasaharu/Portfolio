import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { Observable } from 'rxjs';
import { Article, Feed } from '../../domain/feed';

@Injectable()
export class DeprecatedArticleStore extends ComponentStore<Feed> {
  constructor() {
    super({ items: [] });
  }

  readonly blogItems$: Observable<Article[]> = this.select((state) => state.items);

  readonly setFeed = this.updater((_, feed: Feed) => {
    return { items: feed.items };
  });
}

type ArticleState = {
  items: Article[];
};
const initialState: ArticleState = { items: [] };

export const ArticleStore = signalStore(
  withState(initialState),
  withMethods((store) => {
    return {
      setFeed(feed: Feed): void {
        patchState(store, () => {
          return { items: feed.items };
        });
      },
    };
  }),
);
