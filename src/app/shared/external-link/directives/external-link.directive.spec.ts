import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ExternalLinkDirective } from './external-link.directive';

@Component({
  template: '<a href="/">Test</a>',
  standalone: true,
})
class TestComponent {}

@Component({
  template: '<a appExternalLink href="/">Test2</a>',
  standalone: true,
  imports: [ExternalLinkDirective],
})
class TestUsingDirectiveComponent {}

describe('ExternalLinkDirective is not used', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [TestComponent, ExternalLinkDirective],
      teardown: { destroyAfterEach: false },
    }).createComponent(TestComponent);

    fixture.detectChanges();
  });

  it('directive を付与していない場合 debugElement が null', () => {
    const debugElement = fixture.debugElement.query(By.directive(ExternalLinkDirective));
    expect(debugElement).toBeNull();
  });
});

describe('ExternalLinkDirective is used', () => {
  let fixture: ComponentFixture<TestUsingDirectiveComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [TestUsingDirectiveComponent, ExternalLinkDirective],
      teardown: { destroyAfterEach: false },
    }).createComponent(TestUsingDirectiveComponent);

    fixture.detectChanges();
  });

  it('directive を付与した場合 target は _blank, rel は noopener になる', () => {
    const debugElement = fixture.debugElement.query(By.directive(ExternalLinkDirective));
    const element: HTMLElement = debugElement.nativeElement;

    expect(element.getAttribute('target')).toBe('_blank');
    expect(element.getAttribute('rel')).toBe('noopener');
  });
});
