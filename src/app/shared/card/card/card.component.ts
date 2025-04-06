import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { ExternalLinkDirective } from '../../external-link/directives/external-link.directive';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NgIf, ExternalLinkDirective]
})
export class CardComponent {
  @Input() title = '';
  @Input() demoPageUrl = '';
  @Input() repositoryName = '';
  @Input() repositoryUrl = '';
}
