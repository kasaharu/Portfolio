import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExternalLinkDirective } from '../../../../shared/external-link/directives/external-link.directive';
import { PageTitleComponent } from '../../../../shared/page-title/page-title/page-title.component';
import { TopComponent } from './top.component';

describe('TopComponent', () => {
  let component: TopComponent;
  let fixture: ComponentFixture<TopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopComponent, PageTitleComponent, ExternalLinkDirective],
      teardown: { destroyAfterEach: false },
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
