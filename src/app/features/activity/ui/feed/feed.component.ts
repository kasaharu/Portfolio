import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FeedService } from '../../applications/feed.service';
import { FeedStore } from './feed.store';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FeedStore, FeedService],
})
export class FeedComponent implements OnInit {
  constructor(private readonly componentStore: FeedStore, private readonly feadService: FeedService) {}
  blogItems$ = this.componentStore.blogItems$;

  ngOnInit(): void {
    this.feadService.fetch();
  }
}
