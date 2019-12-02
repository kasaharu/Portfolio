import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { LabComponent } from './ui/lab/lab.component';

@NgModule({
  declarations: [LabComponent],
  imports: [CommonModule, SharedModule],
})
export class LabModule {}
