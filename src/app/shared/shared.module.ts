import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './ui/card/card.component';
import { ExternalLinkDirective } from './ui/directives/external-link.directive';
import { PageTitleComponent } from './ui/page-title/page-title.component';

@NgModule({
  declarations: [PageTitleComponent, CardComponent, ExternalLinkDirective],
  imports: [CommonModule],
  exports: [PageTitleComponent, CardComponent, ExternalLinkDirective],
})
export class SharedModule {}
