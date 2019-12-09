import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OssListComponent } from './oss-list.component';

describe('OssListComponent', () => {
  let component: OssListComponent;
  let fixture: ComponentFixture<OssListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OssListComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OssListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
