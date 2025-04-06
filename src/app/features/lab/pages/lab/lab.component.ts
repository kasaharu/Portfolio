import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { contents } from '../../data/content';
import { CardComponent } from '../../../../shared/card/card/card.component';
import { PageTitleComponent } from '../../../../shared/page-title/page-title/page-title.component';

@Component({
    templateUrl: './lab.component.html',
    styleUrls: ['./lab.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [PageTitleComponent, NgFor, CardComponent]
})
export class LabPageComponent {
  labsContents = contents;
}
