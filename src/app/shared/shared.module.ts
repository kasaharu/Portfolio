import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExternalLinkDirective } from './ui/directives/external-link.directive';

@NgModule({
  declarations: [ExternalLinkDirective],
  imports: [CommonModule],
  exports: [ExternalLinkDirective],
})
export class SharedModule {}
