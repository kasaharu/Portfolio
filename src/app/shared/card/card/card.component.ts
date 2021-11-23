import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input()
    title = '';
  @Input()
    demoPageUrl = '';
  @Input()
    repositoryName = '';
  @Input()
    repositoryUrl = '';
}
