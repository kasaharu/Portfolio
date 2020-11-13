import { TestBed } from '@angular/core/testing';
import { FeedStore } from '../ui/feed/feed.store';

import { FeedService } from './feed.service';

describe('FeedService', () => {
  let service: FeedService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeedService, FeedStore],
    });
    service = TestBed.inject(FeedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
