import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { PageTitleModule } from '../../../../shared/page-title/page-title.module';
import { OssPageComponent } from './oss.component';

describe('OssListPageComponent', () => {
  let component: OssPageComponent;
  let fixture: ComponentFixture<OssPageComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
    declarations: [OssPageComponent],
    imports: [MatTableModule, PageTitleModule],
    teardown: { destroyAfterEach: false }
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
