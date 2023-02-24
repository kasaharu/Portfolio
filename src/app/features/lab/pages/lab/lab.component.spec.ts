import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CardComponent } from '../../../../shared/card/card/card.component';
import { PageTitleComponent } from '../../../../shared/page-title/page-title/page-title.component';
import { LabPageComponent } from './lab.component';

describe('LabComponent', () => {
  let component: LabPageComponent;
  let fixture: ComponentFixture<LabPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [LabPageComponent, PageTitleComponent, CardComponent],
      teardown: { destroyAfterEach: false },
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
