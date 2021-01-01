import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LabPageComponent } from './pages/lab/lab.component';

const routes: Routes = [{ path: '', component: LabPageComponent, pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LabRoutingModule {}
