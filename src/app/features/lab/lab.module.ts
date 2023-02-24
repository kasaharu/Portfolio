import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { LabRoutingModule } from './lab-routing.module';
import { LabPageComponent } from './pages/lab/lab.component';

@NgModule({
    imports: [CommonModule, LabRoutingModule, LabPageComponent]
})
export class LabModule {}
