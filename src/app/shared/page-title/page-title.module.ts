import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageTitleComponent } from './page-title/page-title.component';

@NgModule({
    imports: [CommonModule, PageTitleComponent],
    exports: [PageTitleComponent]
})
export class PageTitleModule {}
