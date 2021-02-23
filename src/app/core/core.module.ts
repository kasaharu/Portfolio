import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgWorkboxComponentsModule } from '@kasaharu/ng-workbox/components';
import { ExternalLinkModule } from '../shared/external-link/external-link.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, RouterModule, NgWorkboxComponentsModule, ExternalLinkModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
