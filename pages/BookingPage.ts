import type { Locator, Page } from '@playwright/test';

export interface BookingInput {
  pickup: string;
  destination: string;
  distanceKm: number;
  fleetLabel?: string;
  passengers?: number;
}

export class BookingPage {
  readonly pickupInput: Locator;
  readonly destinationInput: Locator;
  readonly distanceInput: Locator;
  readonly fleetSelect: Locator;
  readonly passengersInput: Locator;
  readonly calculateButton: Locator;
  readonly errorAlert: Locator;

  constructor(
    private readonly page: Page,
    private readonly version: '1' | '2' = '1'
  ) {
    this.pickupInput = page.getByLabel('Pickup Location');
    this.destinationInput = page.getByLabel('Destination');
    this.distanceInput = page.getByLabel('Distance (km)');
    this.fleetSelect = page.getByLabel('Fleet Type');
    this.passengersInput = page.getByLabel('Passengers');
    this.calculateButton = page.getByRole('button', { name: 'Calculate Fare' });
    this.errorAlert = page.getByRole('alert');
  }

  async goto() {
    await this.page.goto(`/sandbox/booking?v=${this.version}`);
  }

  async fillAndCalculate(input: BookingInput) {
    await this.pickupInput.fill(input.pickup);
    await this.destinationInput.fill(input.destination);
    await this.distanceInput.fill(String(input.distanceKm));
    if (input.fleetLabel) {
      await this.fleetSelect.selectOption({ label: input.fleetLabel });
    }
    if (input.passengers !== undefined) {
      await this.passengersInput.fill(String(input.passengers));
    }
    await this.calculateButton.click();
  }
}
