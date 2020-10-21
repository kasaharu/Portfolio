import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnsComponent } from './sns.component';

describe('SnsComponent', () => {
  let component: SnsComponent;
  let fixture: ComponentFixture<SnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SnsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
