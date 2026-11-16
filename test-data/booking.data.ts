export const BOOKING_DATA = {
  smokeCorporate: {
    pickup: 'Bluebird HQ Mampang',
    destination: 'SCBD Sudirman',
    distanceKm: 10,
    fleetLabel: 'Regular Bluebird',
    passengers: 1,
  },
  fleets: [
    { label: 'Regular Bluebird', ratePerKm: 10_000, maxPax: 4 },
    { label: 'Silverbird Executive', ratePerKm: 25_000, maxPax: 6 },
    { label: 'E-Bluebird EV', ratePerKm: 15_000, maxPax: 4 },
  ],
  boundaries: {
    belowMinKm: 0,
    minValidKm: 1,
    maxValidKm: 100,
    aboveMaxKm: 101,
  },
  promos: {
    corp20: 'CORP20',
    bluebird50: 'BLUEBIRD50',
    invalid: 'EXPIRED99',
  },
} as const;
