import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface RssResponse {
  rss: {
    channel: [
      {
        description: string[];
        docs: string[];
        generator: string[];
        item: [{ category: string[]; link: string[]; pubDate: string[]; title: string[] }];
        lastBuildDate: string[];
        link: string[];
        title: string[];
      },
    ];
  };
}

@Injectable({
  providedIn: 'root',
})
export class FeedGateway {
  constructor(private readonly http: HttpClient) {}

  getRssResponse() {
    const requestOptions: Object = {
      observe: 'body',
      responseType: 'text',
    };
    this.http.get<RssResponse>('https://kasaharu.hatenablog.com/rss', requestOptions).toPromise();
  }
}
