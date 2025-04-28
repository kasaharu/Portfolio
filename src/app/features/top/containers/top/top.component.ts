import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ExternalLinkDirective } from '../../../../shared/external-link/directives/external-link.directive';

import { snsList } from '../../data/sns';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ExternalLinkDirective],
})
export class TopComponent {
  readonly myInfoList: string[] = ['Web Frontend Engineer', 'Angular Japan User Group Staff'];
  readonly snsList = snsList;
}
