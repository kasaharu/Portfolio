import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ExternalLinkDirective } from '../../../../shared/external-link/directives/external-link.directive';
import { slideList } from '../../data/slide';

@Component({
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatTableModule, ExternalLinkDirective],
})
export class SlidePageComponent {
  readonly slideList = slideList;
  displayedColumns = ['date', 'slide', 'event'];
}
