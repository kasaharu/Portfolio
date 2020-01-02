import { Component } from '@angular/core';
import { IdleMonitorService } from '@scullyio/ng-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private idle: IdleMonitorService) {}
}
