import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExternalLinkModule } from '../shared/external-link/external-link.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
    imports: [CommonModule, RouterModule, ExternalLinkModule, HeaderComponent, FooterComponent],
    exports: [HeaderComponent, FooterComponent]
})
export class CoreModule {}
