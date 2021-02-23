import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExternalLinkDirective } from './directives/external-link.directive';

@NgModule({
  declarations: [ExternalLinkDirective],
  imports: [CommonModule],
  exports: [ExternalLinkDirective],
})
export class ExternalLinkModule {}
