import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ossList } from '../../data/oss';
import { Oss } from '../../domain/models';
import { ExternalLinkDirective } from '../../../../shared/external-link/directives/external-link.directive';
import { MatLegacyTableModule } from '@angular/material/legacy-table';

@Component({
    templateUrl: './oss.component.html',
    styleUrls: ['./oss.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [MatLegacyTableModule, ExternalLinkDirective]
})
export class OssPageComponent {
  ossList: Oss[] = ossList;
  displayedColumns = ['date', 'repository'];
}
