import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { snsList } from '../../data/sns';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivityComponent implements OnInit {
  constructor() {}
  readonly snsList = snsList;

  ngOnInit() {}
}
