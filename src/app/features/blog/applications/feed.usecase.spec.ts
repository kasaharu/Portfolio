import { TestBed } from '@angular/core/testing';
import { FeedStore } from '../containers/feed/feed.store';

import { FeedUsecase } from './feed.usecase';

describe('FeedUsecase', () => {
  let usecase: FeedUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeedUsecase, FeedStore],
    });
    usecase = TestBed.inject(FeedUsecase);
  });

  it('should be created', () => {
    expect(usecase).toBeTruthy();
  });
});
