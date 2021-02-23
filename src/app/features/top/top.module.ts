import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageTitleModule } from '../../shared/page-title/page-title.module';
import { TopComponent } from './containers/top/top.component';
import { TopPageComponent } from './pages/top/top.component';
import { TopRoutingModule } from './top-routing.module';

@NgModule({
  declarations: [TopPageComponent, TopComponent],
  imports: [CommonModule, TopRoutingModule, PageTitleModule],
})
export class TopModule {}
