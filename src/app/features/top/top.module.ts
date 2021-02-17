import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { TopComponent } from './containers/top/top.component';
import { TopPageComponent } from './pages/top/top.component';
import { TopRoutingModule } from './top-routing.module';

@NgModule({
  declarations: [TopPageComponent, TopComponent],
  imports: [CommonModule, TopRoutingModule, SharedModule],
})
export class TopModule {}
