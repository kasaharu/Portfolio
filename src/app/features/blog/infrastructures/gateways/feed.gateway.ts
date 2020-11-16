import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RssFeed } from '../../domain/feed';

@Injectable({
  providedIn: 'root',
})
export class FeedGateway {
  constructor(private readonly http: HttpClient) {}

  getRssResponse(): Observable<RssFeed> {
    const requestOptions: object = {
      observe: 'body',
      responseType: 'text',
    };
    return this.http.get<RssFeed>('https://kasaharu.hatenablog.com/rss', requestOptions);
  }
}
