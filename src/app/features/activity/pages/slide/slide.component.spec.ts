import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { SlidePageComponent } from './slide.component';

describe('SlidePageComponent', () => {
  let component: SlidePageComponent;
  let fixture: ComponentFixture<SlidePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SlidePageComponent],
      imports: [MatTableModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
