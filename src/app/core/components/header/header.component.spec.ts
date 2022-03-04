import { render, screen } from '@testing-library/angular';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  it('heading に kasaharu.web が表示される', async () => {
    await render(HeaderComponent);

    expect(screen.getByRole('heading', { name: /kasaharu\.web/i }));
  });

  it('Top という link が表示される', async () => {
    await render(HeaderComponent);

    expect(screen.getByRole('link', { name: /Top/i }));
  });

  it('Blog という link が表示される', async () => {
    await render(HeaderComponent);

    expect(screen.getByRole('link', { name: /Blog/i }));
  });

  it('Activity という link が表示される', async () => {
    await render(HeaderComponent);

    expect(screen.getByRole('link', { name: /Activity/i }));
  });

  it('Lab という link が表示される', async () => {
    await render(HeaderComponent);

    expect(screen.getByRole('link', { name: /Lab/i }));
  });
});
