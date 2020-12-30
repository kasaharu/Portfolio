import { ChangeDetectionStrategy, Component } from '@angular/core';
import { slideList } from '../../data/slide';

@Component({
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlidePageComponent {
  readonly slideList = slideList;
  displayedColumns = ['date', 'slide', 'event'];
}
