import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { contents } from '../../data/content';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabComponent implements OnInit {
  constructor() {}
  labsContents = contents;

  ngOnInit() {}
}
