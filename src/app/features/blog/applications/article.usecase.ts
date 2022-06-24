import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import XMLParser from 'xml2js';
import { ArticleStore } from '../containers/articles/article.store';
import { FeedValueObject, RssFeed } from '../domain/feed';
import { FeedGateway } from '../infrastructures/gateways/feed.gateway';

@Injectable()
export class ArticleUsecase {
  constructor(private readonly componentStore: ArticleStore, private readonly feedGateway: FeedGateway) {}

  async fetchFeed() {
    const rssFeed = await firstValueFrom(this.feedGateway.getRssResponse());
    const parsed: RssFeed = await XMLParser.parseStringPromise(rssFeed);
    const feedValueObject = FeedValueObject.createFromRssResponse(parsed);

    this.componentStore.setFeed(feedValueObject.plainObject());
  }
}
