import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TopComponent } from '../../containers/top/top.component';

@Component({
    template: '<app-top></app-top>',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [TopComponent]
})
export class TopPageComponent {}
