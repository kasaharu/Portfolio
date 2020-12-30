import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivityPageComponent implements OnDestroy {
  constructor(private readonly router: Router) {
    this.router.events.pipe(takeUntil(this.onDestroy$)).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const splitedUrl = event.urlAfterRedirects.split('/');
        this.activeLink = splitedUrl[splitedUrl.length - 1];
      }
    });
  }

  private onDestroy$ = new Subject();

  categories = [
    { key: 'slide', lable: 'Slides' },
    { key: 'oss', lable: 'OSS' },
  ];
  activeLink!: string;

  ngOnDestroy() {
    this.onDestroy$.next();
  }
}
