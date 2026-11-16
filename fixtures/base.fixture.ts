import { test as base } from '@playwright/test';
import { BookingPage } from '../pages/BookingPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { LoginPage } from '../pages/LoginPage';
import { BOOKING_DATA } from '../test-data/booking.data';

export interface StarterOptions {
  sandboxVersion: '1' | '2';
}

interface StarterFixtures {
  loginPage: LoginPage;
  bookingPage: BookingPage;
  checkoutPage: CheckoutPage;
  bookingData: typeof BOOKING_DATA;
}

export const test = base.extend<StarterOptions & StarterFixtures>({
  sandboxVersion: ['1', { option: true }],

  page: async ({ page, sandboxVersion }, use) => {
    await page.addInitScript((v) => {
      window.sessionStorage.setItem('squadap_sandbox_version', v);
    }, sandboxVersion);
    await use(page);
  },

  loginPage: async ({ page, sandboxVersion }, use) => {
    await use(new LoginPage(page, sandboxVersion));
  },

  bookingPage: async ({ page, sandboxVersion }, use) => {
    await use(new BookingPage(page, sandboxVersion));
  },

  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },

  bookingData: async ({}, use) => {
    await use(BOOKING_DATA);
  },
});

export { expect } from '@playwright/test';
