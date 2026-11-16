import type { Locator, Page } from '@playwright/test';

export class CheckoutPage {
  readonly promoInput: Locator;
  readonly applyPromoButton: Locator;
  readonly baseFare: Locator;
  readonly totalFare: Locator;
  readonly orderStatus: Locator;
  readonly confirmButton: Locator;
  readonly cancelButton: Locator;
  readonly promoError: Locator;

  constructor(private readonly page: Page) {
    this.promoInput = page.getByTestId('promo-input');
    this.applyPromoButton = page.getByRole('button', { name: 'Apply Promo' });
    this.baseFare = page.getByTestId('base-fare');
    this.totalFare = page.getByTestId('total-fare');
    this.orderStatus = page.getByTestId('order-status');
    this.confirmButton = page.getByRole('button', { name: 'Confirm Booking' });
    this.cancelButton = page.getByRole('button', { name: 'Cancel Booking' });
    this.promoError = page.getByRole('alert');
  }

  async applyPromo(code: string) {
    await this.promoInput.fill(code);
    await this.applyPromoButton.click();
  }

  async confirmBooking() {
    await this.confirmButton.click();
  }
}
