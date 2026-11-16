import fs from 'node:fs';
import path from 'node:path';
import { expect, test as setup } from '../fixtures/base.fixture';

const AUTH_FILE = path.resolve(__dirname, '../.auth/user.json');

setup('authenticate corporate qa user', async ({ loginPage, page }) => {
  const email = process.env.QA_EMAIL || 'qa.engineer@bluebird.id';
  const password = process.env.QA_PASSWORD || 'BluebirdQA2026!';

  await loginPage.goto();
  await loginPage.signIn(email, password);

  await expect(page).toHaveURL(/\/sandbox\/booking/);

  fs.mkdirSync(path.dirname(AUTH_FILE), { recursive: true });
  await page.context().storageState({ path: AUTH_FILE });
});
