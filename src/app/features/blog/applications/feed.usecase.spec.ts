import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { FeedStore } from '../containers/feed/feed.store';
import { FeedUsecase } from './feed.usecase';

describe('FeedUsecase', () => {
  let usecase: FeedUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FeedUsecase, FeedStore],
    });
    usecase = TestBed.inject(FeedUsecase);
  });

  it('should be created', () => {
    expect(usecase).toBeTruthy();
  });
});
