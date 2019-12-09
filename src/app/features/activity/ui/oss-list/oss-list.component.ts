import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oss-list',
  templateUrl: './oss-list.component.html',
  styleUrls: ['./oss-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OssListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
