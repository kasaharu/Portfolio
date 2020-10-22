import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivityComponent implements OnInit {
  constructor(private readonly router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const splitedUrl = event.url.split('/');
        this.activeLink = splitedUrl[splitedUrl.length - 1];
      }
    });
  }

  categories = { slide: 'Slide', sns: 'SNS', oss: 'OSS' };
  links = Object.keys(this.categories);
  activeLink!: string;

  ngOnInit() {}
}
