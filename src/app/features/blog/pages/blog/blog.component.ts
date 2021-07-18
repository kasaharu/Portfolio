import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  template: '<app-articles></app-articles>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogPageComponent {}
