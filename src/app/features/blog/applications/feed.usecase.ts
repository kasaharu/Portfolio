import { Injectable } from '@angular/core';
import XMLParser from 'xml2js';
import { FeedStore } from '../containers/article/article.store';
import { FeedValueObject, RssFeed } from '../domain/feed';
import { FeedGateway } from '../infrastructures/gateways/feed.gateway';

@Injectable()
export class FeedUsecase {
  constructor(private readonly componentStore: FeedStore, private readonly feedGateway: FeedGateway) {}

  async fetchFeed() {
    const rssFeed = await this.feedGateway.getRssResponse().toPromise();
    const parsed: RssFeed = await XMLParser.parseStringPromise(rssFeed);
    const feedValueObject = FeedValueObject.createFromRssResponse(parsed);

    this.componentStore.setFeed(feedValueObject.plainObject());
  }
}
