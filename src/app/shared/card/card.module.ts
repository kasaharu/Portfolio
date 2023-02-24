import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExternalLinkModule } from '../external-link/external-link.module';
import { CardComponent } from './card/card.component';

@NgModule({
    imports: [CommonModule, ExternalLinkModule, CardComponent],
    exports: [CardComponent]
})
export class CardModule {}
