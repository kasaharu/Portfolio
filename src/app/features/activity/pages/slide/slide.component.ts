import { ChangeDetectionStrategy, Component } from '@angular/core';
import { slideList } from '../../data/slide';
import { ExternalLinkDirective } from '../../../../shared/external-link/directives/external-link.directive';
import { MatLegacyTableModule } from '@angular/material/legacy-table';

@Component({
    templateUrl: './slide.component.html',
    styleUrls: ['./slide.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [MatLegacyTableModule, ExternalLinkDirective]
})
export class SlidePageComponent {
  readonly slideList = slideList;
  displayedColumns = ['date', 'slide', 'event'];
}
