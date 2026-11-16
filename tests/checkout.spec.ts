import { expect, test } from '../fixtures/base.fixture';

test('corporate booking with CORP20 promo discount @smoke @regression', async ({
  bookingPage,
  checkoutPage,
  bookingData,
}) => {
  await bookingPage.goto();
  await bookingPage.fillAndCalculate(bookingData.smokeCorporate);

  await expect(checkoutPage.baseFare).toHaveText('Rp 100.000');
  await checkoutPage.applyPromo(bookingData.promos.corp20);
  await expect(checkoutPage.totalFare).toHaveText('Rp 80.000');

  await checkoutPage.confirmBooking();
  await expect(checkoutPage.orderStatus).toHaveText('Searching Driver');
});
