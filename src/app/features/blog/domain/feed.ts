export interface Feed {
  items: BlogItem[];
}

export interface BlogItem {
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
