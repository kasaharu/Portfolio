import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NgFor } from '@angular/common';
import { MatLegacyTabsModule } from '@angular/material/legacy-tabs';
import { PageTitleComponent } from '../../../../shared/page-title/page-title/page-title.component';

@Component({
    templateUrl: './activity.component.html',
    styleUrls: ['./activity.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [PageTitleComponent, MatLegacyTabsModule, NgFor, RouterLink, RouterOutlet]
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

  private onDestroy$ = new Subject<void>();

  categories = [
    { key: 'slide', label: 'Slides' },
    { key: 'oss', label: 'OSS' },
  ];
  activeLink!: string;

  ngOnDestroy() {
    this.onDestroy$.next();
  }
}
