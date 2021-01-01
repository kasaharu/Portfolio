import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ossList } from '../../data/oss';
import { Oss } from '../../domain/models';

@Component({
  templateUrl: './oss.component.html',
  styleUrls: ['./oss.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OssPageComponent {
  ossList: Oss[] = ossList;
  displayedColumns = ['date', 'repository'];
}
