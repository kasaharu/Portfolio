import { render, screen } from '@testing-library/angular';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  it('© 2019 kasaharu が表示されること', async () => {
    await render(FooterComponent);

    expect(screen.getByText('© 2019 kasaharu')).toBeTruthy();
  });

  it('GitHub repository という link が表示される', async () => {
    await render(FooterComponent);

    expect(screen.getByRole('link', { name: /GitHub repository/i }));
  });
});
