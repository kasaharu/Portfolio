import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './ui/card/card.component';
import { PageTitleComponent } from './ui/page-title/page-title.component';

@NgModule({
  declarations: [PageTitleComponent, CardComponent],
  imports: [CommonModule],
  exports: [PageTitleComponent],
})
export class SharedModule {}
