import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExternalLinkModule } from '../../../../shared/external-link/external-link.module';
import { PageTitleModule } from '../../../../shared/page-title/page-title.module';
import { TopComponent } from './top.component';

describe('TopComponent', () => {
  let component: TopComponent;
  let fixture: ComponentFixture<TopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [TopComponent],
    imports: [PageTitleModule, ExternalLinkModule],
    teardown: { destroyAfterEach: false }
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
