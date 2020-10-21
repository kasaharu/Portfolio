import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { slideList } from '../../data/slide';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlideComponent implements OnInit {
  constructor() {}
  readonly slideList = slideList;
  displayedColumns = ['date', 'slide', 'event'];

  ngOnInit(): void {}
}
