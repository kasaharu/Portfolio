import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ossList } from '../../data/oss';
import { Oss } from '../../domain/models';

@Component({
  selector: 'app-oss-list',
  templateUrl: './oss-list.component.html',
  styleUrls: ['./oss-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OssListComponent implements OnInit {
  constructor() {}
  ossList: Oss[] = ossList;
  displayedColumns = ['date', 'repository'];

  ngOnInit() {}
}
