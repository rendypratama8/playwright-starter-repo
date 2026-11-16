import { expect, test } from '../fixtures/base.fixture';

test('seed authenticated booking context', async ({ bookingPage, page }) => {
  await bookingPage.goto();
  await expect(page.getByRole('heading', { name: 'Corporate Fleet Booking' })).toBeVisible();
});
