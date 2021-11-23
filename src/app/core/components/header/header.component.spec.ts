import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NgWorkboxComponentsModule } from '@kasaharu/ng-workbox/components';
import { HeaderHarness } from '@kasaharu/ng-workbox/components/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let loader: HarnessLoader;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NgWorkboxComponentsModule],
        declarations: [HeaderComponent],
        teardown: { destroyAfterEach: false },
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the HeaderComponent', async () => {
    const headerHarness = await loader.getHarness(HeaderHarness);

    expect(headerHarness).toBeTruthy();
  });

  it('should show as title kasaharu.web', async () => {
    const headerHarness = await loader.getHarness(HeaderHarness);
    const title = await headerHarness.getTitleText();

    expect(title).toBe('kasaharu.web');
  });
});
