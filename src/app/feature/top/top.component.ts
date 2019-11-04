import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopComponent implements OnInit {
  constructor() {}

  readonly name = 'kasaharu (Wataru KASAHARA)';
  readonly myInfoList: string[] = ['Web Frontend Engineer', 'Angular Japan User Group Staff'];

  ngOnInit() {}
}