import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { BlogItem, Feed } from '../../domain/feed';

@Injectable()
export class FeedStore extends ComponentStore<Feed> {
  constructor() {
    super({ items: [] });
  }

  readonly blogItems$: Observable<BlogItem[]> = this.select((state) => state.items.filter((_, index) => index < 10));

  readonly setFeed = this.updater((_, feed: Feed) => {
    return { items: feed.items };
  });
}