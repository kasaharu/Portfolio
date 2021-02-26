export interface Feed {
  items: Article[];
}

export interface Article {
  title: string;
  categories: string[];
  link: string;
  publishDate: string;
}

export interface RssFeed {
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

export class FeedValueObject implements Feed {
  private constructor(items: Article[]) {
    this.items = items;
  }
  readonly items: Article[];

  static createFromRssResponse(rssResponse: RssFeed): FeedValueObject {
    const blogItems: any = rssResponse.rss.channel[0].item.map((item) => {
      return {
        title: item.title[0],
        categories: item.category || [],
        link: item.link[0],
        publishDate: item.pubDate[0],
      };
    });

    return new FeedValueObject(blogItems);
  }

  plainObject(): Feed {
    return { items: this.items };
  }
}
