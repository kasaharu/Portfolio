import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { Article, Feed } from '../../domain/feed';

type ArticleState = {
  items: Article[];
};
const initialState: ArticleState = { items: [] };

export const ArticleStore = signalStore(
  withState(initialState),
  withMethods((store) => {
    return {
      setFeed(feed: Feed): void {
        patchState(store, () => {
          return { items: feed.items };
        });
      },
    };
  }),
);
