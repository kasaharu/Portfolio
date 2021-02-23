import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './ui/card/card.component';
import { ExternalLinkDirective } from './ui/directives/external-link.directive';

@NgModule({
  declarations: [CardComponent, ExternalLinkDirective],
  imports: [CommonModule],
  exports: [CardComponent, ExternalLinkDirective],
})
export class SharedModule {}
