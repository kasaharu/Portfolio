import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

export interface Slide {
  serviceName: string;
  url: string;
}

export interface Sns {
  serviceName: string;
  url: string;
}

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivityComponent implements OnInit {
  constructor() {}
  readonly slide: Slide = { serviceName: 'Speaker Deck', url: 'https://speakerdeck.com/kasaharu' };
  readonly snsList: Sns[] = [
    { serviceName: 'GitHub', url: 'https://github.com/kasaharu' },
    { serviceName: 'Twitter', url: 'https://twitter.com/kasaharu' },
    { serviceName: 'connpass', url: 'https://connpass.com/user/kasaharu/' },
  ];

  ngOnInit() {}
}
