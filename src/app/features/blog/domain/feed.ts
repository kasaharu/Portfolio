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
