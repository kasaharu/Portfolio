import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageTitleModule } from '../../shared/page-title/page-title.module';
import { SharedModule } from '../../shared/shared.module';
import { LabRoutingModule } from './lab-routing.module';
import { LabPageComponent } from './pages/lab/lab.component';

@NgModule({
  declarations: [LabPageComponent],
  imports: [CommonModule, SharedModule, LabRoutingModule, PageTitleModule],
})
export class LabModule {}
