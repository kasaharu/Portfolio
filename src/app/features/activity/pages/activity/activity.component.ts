import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivityPageComponent {
  constructor(private readonly router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const splitedUrl = event.url.split('/');
        this.activeLink = splitedUrl[splitedUrl.length - 1];
      }
    });
  }

  categories = [
    { key: 'slide', lable: 'Slides' },
    { key: 'oss', lable: 'OSS' },
  ];
  activeLink!: string;
}
