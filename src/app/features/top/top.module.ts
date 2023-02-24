import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExternalLinkModule } from '../../shared/external-link/external-link.module';
import { PageTitleModule } from '../../shared/page-title/page-title.module';
import { TopComponent } from './containers/top/top.component';
import { TopPageComponent } from './pages/top/top.component';
import { TopRoutingModule } from './top-routing.module';

@NgModule({
    imports: [CommonModule, TopRoutingModule, PageTitleModule, ExternalLinkModule, TopPageComponent, TopComponent]
})
export class TopModule {}
