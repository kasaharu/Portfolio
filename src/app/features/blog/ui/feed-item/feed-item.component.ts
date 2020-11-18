import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { BlogItem } from '../../domain/feed';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedItemComponent implements OnInit {
  constructor() {}

  @Input()
  feedItem!: BlogItem;

  ngOnInit(): void {}
}
