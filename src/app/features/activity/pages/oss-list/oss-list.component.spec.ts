import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PageTitleComponent } from '../../../../shared/ui/page-title/page-title.component';
import { OssListComponent } from './oss-list.component';

describe('OssListComponent', () => {
  let component: OssListComponent;
  let fixture: ComponentFixture<OssListComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [OssListComponent, PageTitleComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(OssListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
