import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ExternalLinkDirective } from '../../../shared/external-link/directives/external-link.directive';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ExternalLinkDirective]
})
export class FooterComponent {}
