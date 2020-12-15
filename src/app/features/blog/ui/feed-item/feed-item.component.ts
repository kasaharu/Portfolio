import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BlogItem } from '../../domain/feed';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedItemComponent {
  @Input()
  feedItem!: BlogItem;
}
