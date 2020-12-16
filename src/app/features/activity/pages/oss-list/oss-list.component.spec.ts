import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PageTitleComponent } from '../../../../shared/ui/page-title/page-title.component';
import { OssListPageComponent } from './oss-list.component';

describe('OssListPageComponent', () => {
  let component: OssListPageComponent;
  let fixture: ComponentFixture<OssListPageComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [OssListPageComponent, PageTitleComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(OssListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
