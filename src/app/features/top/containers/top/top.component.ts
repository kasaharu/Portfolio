import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ExternalLinkDirective } from '../../../../shared/external-link/directives/external-link.directive';
import { PageTitleComponent } from '../../../../shared/page-title/page-title/page-title.component';
import { snsList } from '../../data/sns';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [PageTitleComponent, NgFor, ExternalLinkDirective],
})
export class TopComponent {
  readonly myInfoList: string[] = ['Web Frontend Engineer', 'Angular Japan User Group Staff'];
  readonly snsList = snsList;
}
