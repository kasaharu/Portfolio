import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FeedUsecase } from '../../applications/feed.usecase';
import { FeedStore } from './feed.store';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FeedStore, FeedUsecase],
})
export class FeedComponent implements OnInit {
  constructor(private readonly componentStore: FeedStore, private usecase: FeedUsecase) {}
  blogItems$ = this.componentStore.blogItems$;

  ngOnInit(): void {
    this.usecase.fetchFeed();
  }
}
