import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { slide } from '../../data/slide';
import { snsList } from '../../data/sns';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivityComponent implements OnInit {
  constructor() {}
  readonly slide = slide;
  readonly snsList = snsList;

  ngOnInit() {}
}
