# Reference Booking & Checkout Test Plan

> Sample Playwright AI Planner output augmented with QA ISTQB review additions (EP, BVA, State Transitions).

## 1. Authentication (Setup)
- [x] Sign in via `/sandbox/login` with `qa.engineer@bluebird.id` and persist `.auth/user.json`.
- [ ] Negative login: invalid credentials show `Invalid corporate email or password`.
- [ ] Auth guard: unauthenticated visit to `/sandbox/booking` or `/sandbox/checkout` redirects to `/sandbox/login`.

## 2. Happy Path (AI Planner Baseline)
- [x] Book 10 km `Regular Bluebird` (1 pax) from `Bluebird HQ Mampang` to `SCBD Sudirman`.
- [x] Apply `CORP20` on `/sandbox/checkout` -> Total Fare is `Rp 80.000` (`-20%` off `Rp 100.000`).
- [x] Click `Confirm Booking` -> Order status becomes `Searching Driver`.

## 3. ISTQB QA Review Additions

### Equivalence Partitioning (Fleet Pricing)
- [ ] `Regular Bluebird`: `Rp 10.000/km` (max 4 pax) -> 10 km = `Rp 100.000`.
- [ ] `Silverbird Executive`: `Rp 25.000/km` (max 6 pax) -> 10 km = `Rp 250.000`.
- [ ] `E-Bluebird EV`: `Rp 15.000/km` (max 4 pax) -> 10 km = `Rp 150.000`.

### Boundary Value Analysis (Distance & Passengers)
- [ ] `0 km` -> Error `"Minimum booking distance is 1 km"`.
- [ ] `1 km` -> Valid minimum boundary (`Rp 10.000` Regular).
- [ ] `100 km` -> Valid maximum boundary (`Rp 1.000.000` Regular).
- [ ] `101 km` -> Error `"Maximum city booking distance is 100 km"`.
- [ ] `5 passengers` on `Regular Bluebird` -> Error `"Maximum capacity for Regular Bluebird is 4 passengers"`.

### Promo Vouchers
- [ ] `BLUEBIRD50` -> `-50%` (`Rp 100.000` -> `Rp 50.000`).
- [ ] Unknown code -> Error `"Invalid promo code"`, total remains base fare.

### Order Status State Transitions
- [ ] `Draft` -> `Confirm Booking` -> `Searching Driver`
- [ ] `Searching Driver` -> `Simulate Driver Assigned` -> `Driver Assigned`
- [ ] `Driver Assigned` -> `Complete Trip` -> `Trip Completed` (`Cancel Booking` disabled)
- [ ] `Searching Driver` -> `Cancel Booking` -> `Cancelled`
