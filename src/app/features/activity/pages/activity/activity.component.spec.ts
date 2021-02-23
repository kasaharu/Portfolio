import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterTestingModule } from '@angular/router/testing';
import { PageTitleModule } from '../../../../shared/page-title/page-title.module';
import { ActivityPageComponent } from './activity.component';

describe('ActivityPageComponent', () => {
  let component: ActivityPageComponent;
  let fixture: ComponentFixture<ActivityPageComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ActivityPageComponent],
        imports: [RouterTestingModule, MatTabsModule, PageTitleModule],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
