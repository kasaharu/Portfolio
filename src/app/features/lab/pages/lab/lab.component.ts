import { ChangeDetectionStrategy, Component } from '@angular/core';
import { contents } from '../../data/content';

@Component({
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabPageComponent {
  labsContents = contents;
}
