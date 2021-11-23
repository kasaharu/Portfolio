import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CardModule } from '../../../../shared/card/card.module';
import { PageTitleModule } from '../../../../shared/page-title/page-title.module';
import { LabPageComponent } from './lab.component';

describe('LabComponent', () => {
  let component: LabPageComponent;
  let fixture: ComponentFixture<LabPageComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
    declarations: [LabPageComponent],
    imports: [PageTitleModule, CardModule],
    teardown: { destroyAfterEach: false }
}).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LabPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
