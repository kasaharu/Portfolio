import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { TopComponent } from './containers/top/top.component';
import { TopPageComponent } from './pages/top/top.component';
import { TopRoutingModule } from './top-routing.module';

@NgModule({
    imports: [CommonModule, TopRoutingModule, TopPageComponent, TopComponent]
})
export class TopModule {}
