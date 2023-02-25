import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatLegacyTableModule } from '@angular/material/legacy-table';
import { slideList } from '../../data/slide';
import { ExternalLinkDirective } from '../../../../shared/external-link/directives/external-link.directive';

@Component({
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatLegacyTableModule, ExternalLinkDirective],
})
export class SlidePageComponent {
  readonly slideList = slideList;
  displayedColumns = ['date', 'slide', 'event'];
}
