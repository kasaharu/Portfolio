import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgWorkboxComponentsModule } from '@kasaharu/ng-workbox/components';
import { AppComponent } from './app.component';
import { HeaderComponent } from './features/header/header.component';
import { FooterModule } from './shared/footer/footer.module';

describe('AppComponent', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule, NgWorkboxComponentsModule, FooterModule],
        declarations: [AppComponent, HeaderComponent],
      }).compileComponents();
    }),
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
