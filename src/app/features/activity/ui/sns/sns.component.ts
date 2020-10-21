import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sns',
  templateUrl: './sns.component.html',
  styleUrls: ['./sns.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SnsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
