# Squadap × Bluebird Playwright Guardrails

Follow these rules whenever generating, refactoring, or healing Playwright tests in this repository:

1. **Page Object Model First**: Never place raw locators (`page.locator`, `getByRole`, `getByTestId`, `getByLabel`) directly inside `tests/*.spec.ts`. Define locators and page actions inside `pages/*.ts`.
2. **Use Custom Fixtures**: Always import `{ test, expect }` from `../fixtures/base.fixture`, never directly from `@playwright/test` inside feature specs.
3. **Resilient Locators Only**: Prefer `getByRole`, `getByLabel`, and `getByTestId`. Reject brittle CSS chains (`nth-child`, styling classes) or absolute XPath.
4. **Centralized Test Data**: Keep fleet partitions, boundary values, and promo vouchers inside `test-data/*.ts`.
5. **Safe Healing Boundary**:
   - **Allowed**: Updating UI locator drift inside `pages/*.ts` when copy or `data-testid` changes intentionally (e.g. `v1` -> `v2` button copy).
   - **Forbidden**: Modifying business assertions (such as expected totals like `Rp 80.000`, error validation copy, or order state transitions) to make a failing test pass. Report assertion mismatches as application bugs.
6. **Tags & Determinism**: Tag critical journeys with `@smoke` and full suite coverage with `@regression`. Never use `page.waitForTimeout()`.
