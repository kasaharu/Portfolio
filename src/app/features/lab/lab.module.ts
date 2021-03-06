import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from '../../shared/card/card.module';
import { PageTitleModule } from '../../shared/page-title/page-title.module';
import { LabRoutingModule } from './lab-routing.module';
import { LabPageComponent } from './pages/lab/lab.component';

@NgModule({
  declarations: [LabPageComponent],
  imports: [CommonModule, LabRoutingModule, PageTitleModule, CardModule],
})
export class LabModule {}
