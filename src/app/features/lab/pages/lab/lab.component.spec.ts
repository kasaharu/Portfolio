import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LabPageComponent } from './lab.component';

describe('LabComponent', () => {
  let component: LabPageComponent;
  let fixture: ComponentFixture<LabPageComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LabPageComponent],
        imports: [],
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
