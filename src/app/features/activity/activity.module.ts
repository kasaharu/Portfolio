import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { ExternalLinkModule } from '../../shared/external-link/external-link.module';
import { PageTitleModule } from '../../shared/page-title/page-title.module';
import { ActivityRoutingModule } from './activity-routing.module';
import { ActivityPageComponent } from './pages/activity/activity.component';
import { OssPageComponent } from './pages/oss/oss.component';
import { SlidePageComponent } from './pages/slide/slide.component';

@NgModule({
    imports: [CommonModule, ActivityRoutingModule, MatTableModule, MatTabsModule, PageTitleModule, ExternalLinkModule, ActivityPageComponent, OssPageComponent, SlidePageComponent]
})
export class ActivityModule {}
