import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { slideList } from '../../data/slide';
import { snsList } from '../../data/sns';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivityComponent implements OnInit {
  constructor() {}
  readonly slideList = slideList;
  readonly snsList = snsList;
  displayedColumns = ['date', 'slide', 'event'];

  ngOnInit() {}
}
