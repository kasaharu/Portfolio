import { ChangeDetectionStrategy, Component } from '@angular/core';
import { snsList } from '../../data/sns';
import { ExternalLinkDirective } from '../../../../shared/external-link/directives/external-link.directive';
import { NgFor } from '@angular/common';
import { PageTitleComponent } from '../../../../shared/page-title/page-title/page-title.component';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [PageTitleComponent, NgFor, ExternalLinkDirective],
})
export class TopComponent {
  readonly name = 'kasaharu (Wataru KASAHARA)';
  readonly myInfoList: string[] = ['Web Frontend Engineer', 'Angular Japan User Group Staff'];
  readonly snsList = snsList;
}
