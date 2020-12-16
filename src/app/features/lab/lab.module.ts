import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { LabPageComponent } from './pages/lab/lab.component';

@NgModule({
  declarations: [LabPageComponent],
  imports: [CommonModule, SharedModule],
})
export class LabModule {}
