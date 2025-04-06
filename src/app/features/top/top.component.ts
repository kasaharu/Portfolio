import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageTitleComponent } from '../../shared/page-title/page-title/page-title.component';
import { TopComponent } from './containers/top/top.component';

@Component({
  template: `
    <app-page-title [title]="name"></app-page-title>
    <app-top></app-top>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TopComponent, PageTitleComponent],
})
export class TopPageComponent {
  readonly name = 'kasaharu (Wataru KASAHARA)';
}
