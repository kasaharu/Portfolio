import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import XMLParser from 'xml2js';
import { ArticleStore } from '../containers/articles/article.store';
import { FeedValueObject, RssFeed } from '../domain/feed';
import { FeedGateway } from '../infrastructures/gateways/feed.gateway';

@Injectable()
export class ArticleUsecase {
  private readonly store = inject(ArticleStore);
  private readonly feedGateway = inject(FeedGateway);

  async fetchFeed() {
    const rssFeed = await firstValueFrom(this.feedGateway.getRssResponse());
    const parsed: RssFeed = await XMLParser.parseStringPromise(rssFeed);
    const feedValueObject = FeedValueObject.createFromRssResponse(parsed);

    this.store.setFeed(feedValueObject.plainObject());
  }
}
