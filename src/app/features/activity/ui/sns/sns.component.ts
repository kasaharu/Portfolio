import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { snsList } from '../../data/sns';

@Component({
  selector: 'app-sns',
  templateUrl: './sns.component.html',
  styleUrls: ['./sns.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SnsComponent implements OnInit {
  constructor() {}
  readonly snsList = snsList;

  ngOnInit(): void {}
}
