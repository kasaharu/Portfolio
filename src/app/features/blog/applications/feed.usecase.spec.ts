import { TestBed } from '@angular/core/testing';

import { FeedUsecase } from './feed.usecase';

describe('FeedUsecase', () => {
  let usecase: FeedUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    usecase = TestBed.inject(FeedUsecase);
  });

  it('should be created', () => {
    expect(usecase).toBeTruthy();
  });
});
