import { TestBed } from '@angular/core/testing';

import { FeedGateway } from './feed.gateway';

describe('FeedGateway', () => {
  let gateway: FeedGateway;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    gateway = TestBed.inject(FeedGateway);
  });

  it('should be created', () => {
    expect(gateway).toBeTruthy();
  });
});
