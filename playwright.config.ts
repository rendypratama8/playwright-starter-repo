import 'dotenv/config';
import { defineConfig, devices } from '@playwright/test';
import type { StarterOptions } from './fixtures/base.fixture';

const BASE_URL = process.env.BASE_URL || 'http://localhost:5173';

export default defineConfig<StarterOptions>({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: [['html', { open: 'never' }]],
  use: {
    baseURL: BASE_URL,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'setup',
      testMatch: /.*\.setup\.ts/,
      use: { ...devices['Desktop Chrome'], sandboxVersion: '1' },
    },
    {
      name: 'chromium-v1',
      dependencies: ['setup'],
      use: {
        ...devices['Desktop Chrome'],
        storageState: '.auth/user.json',
        sandboxVersion: '1',
      },
    },
    {
      name: 'chromium-v2',
      dependencies: ['setup'],
      use: {
        ...devices['Desktop Chrome'],
        storageState: '.auth/user.json',
        sandboxVersion: '2',
      },
    },
  ],
});
