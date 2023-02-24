import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-page-title',
    templateUrl: './page-title.component.html',
    styleUrls: ['./page-title.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true
})
export class PageTitleComponent {
  @Input() title = '';
}
