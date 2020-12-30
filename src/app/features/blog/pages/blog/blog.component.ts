import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogPageComponent {}
