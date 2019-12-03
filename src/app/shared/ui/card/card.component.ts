import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  constructor() {}
  @Input()
  title = '';
  @Input()
  demoPageUrl = '';
  @Input()
  repositoryName = '';
  @Input()
  repositoryUrl = '';

  ngOnInit() {}
}
