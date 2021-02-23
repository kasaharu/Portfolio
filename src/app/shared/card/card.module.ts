import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExternalLinkModule } from '../external-link/external-link.module';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, ExternalLinkModule],
  exports: [CardComponent],
})
export class CardModule {}
