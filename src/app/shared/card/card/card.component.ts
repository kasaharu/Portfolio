import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ExternalLinkDirective } from '../../external-link/directives/external-link.directive';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgIf, ExternalLinkDirective]
})
export class CardComponent {
  @Input() title = '';
  @Input() demoPageUrl = '';
  @Input() repositoryName = '';
  @Input() repositoryUrl = '';
}
