import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ExternalLinkDirective } from '../../../../shared/external-link/directives/external-link.directive';
import { ossList } from '../../data/oss';
import { Oss } from '../../domain/models';

@Component({
  templateUrl: './oss.component.html',
  styleUrls: ['./oss.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatTableModule, ExternalLinkDirective],
})
export class OssPageComponent {
  ossList: Oss[] = ossList;
  displayedColumns = ['date', 'repository'];
}
