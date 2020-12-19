import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgWorkboxComponentsModule } from '@kasaharu/ng-workbox/components';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, NgWorkboxComponentsModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
