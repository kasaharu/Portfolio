import { ChangeDetectionStrategy, Component } from '@angular/core';
import { contents } from '../../data/content';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabComponent {
  labsContents = contents;
}
