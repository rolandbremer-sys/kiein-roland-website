const { defineConfig } = require('@playwright/test');

const port = 4173;
const origin = `http://127.0.0.1:${port}`;

module.exports = defineConfig({
  testDir: './tests/browser',
  forbidOnly: Boolean(process.env.CI),
  use: { baseURL: origin },
  projects: ['chromium', 'firefox', 'webkit'].map(browserName => ({
    name: browserName,
    use: { browserName },
  })),
  webServer: {
    command: `node tests/browser/preview-server.cjs ${port}`,
    url: `${origin}/kiein-roland-website/`,
  },
});
