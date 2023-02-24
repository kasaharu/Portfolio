import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExternalLinkDirective } from './directives/external-link.directive';

@NgModule({
    imports: [CommonModule, ExternalLinkDirective],
    exports: [ExternalLinkDirective]
})
export class ExternalLinkModule {}
