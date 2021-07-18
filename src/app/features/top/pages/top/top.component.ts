import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  template: '<app-top></app-top>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopPageComponent {}
