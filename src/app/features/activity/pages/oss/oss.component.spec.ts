import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { PageTitleComponent } from '../../../../shared/ui/page-title/page-title.component';
import { OssPageComponent } from './oss.component';

describe('OssListPageComponent', () => {
  let component: OssPageComponent;
  let fixture: ComponentFixture<OssPageComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [OssPageComponent, PageTitleComponent],
        imports: [MatTableModule],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(OssPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
