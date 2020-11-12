import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import XMLParser from 'xml2js';
import { FeedValueObject, RssResponse } from '../domain/feed';
import { FeedStore } from '../ui/feed/feed.store';

@Injectable()
export class FeedService {
  constructor(private componentStore: FeedStore, private readonly http: HttpClient) {}

  async fetch() {
    const requestOptions: Object = {
      observe: 'body',
      responseType: 'text',
    };
    const result = await this.http.get<RssResponse>('https://kasaharu.hatenablog.com/rss', requestOptions).toPromise();
    const parsed: RssResponse = await XMLParser.parseStringPromise(result);
    const feedValueObject = FeedValueObject.createFromRssResponse(parsed);

    this.componentStore.setFeed(feedValueObject.plainObject());
  }
}
