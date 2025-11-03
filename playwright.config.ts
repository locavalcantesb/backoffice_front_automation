import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './src/tests',
  globalSetup: './src/tests/global-setup.ts',
  globalTeardown: './src/tests/global-teardown.ts',
  /* Executar testes em arquivos em paralelo */
  fullyParallel: true,
  /* Falhar o build no CI se você acidentalmente deixou test.only no código fonte. */
  forbidOnly: !!process.env.CI,
  /* Tentar novamente apenas no CI */
  retries: process.env.CI ? 2 : 0,
  /* Optar por não executar testes paralelos no CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Repórter a usar. Veja https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html'],
    ['json', { outputFile: 'test-results/results.json' }],
    ['junit', { outputFile: 'test-results/results.xml' }]
  ],
  /* Configurações compartilhadas para todos os projetos abaixo. Veja https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* URL base para usar em ações como `await page.goto('/')`. */
    baseURL: 'https://www.saucedemo.com',
    /* Coletar trace ao tentar novamente o teste falhado. Veja https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    /* Tirar screenshot em caso de falha */
    screenshot: 'only-on-failure',
    /* Gravar vídeo em caso de falha */
    video: 'retain-on-failure',
  },

  /* Configurar projetos para navegadores principais */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* Testar contra viewports móveis. */
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
  ],

  /* Executar seu servidor de desenvolvimento local antes de iniciar os testes */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
