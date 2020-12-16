import { ChangeDetectionStrategy, Component } from '@angular/core';
import { snsList } from '../../data/sns';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopPageComponent {
  readonly name = 'kasaharu (Wataru KASAHARA)';
  readonly myInfoList: string[] = ['Web Frontend Engineer', 'Angular Japan User Group Staff'];
  readonly snsList = snsList;
}
