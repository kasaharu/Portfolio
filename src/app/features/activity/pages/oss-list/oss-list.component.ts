import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ossList } from '../../data/oss';
import { Oss } from '../../domain/models';

@Component({
  templateUrl: './oss-list.component.html',
  styleUrls: ['./oss-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OssListPageComponent {
  ossList: Oss[] = ossList;
  displayedColumns = ['date', 'repository'];
}
