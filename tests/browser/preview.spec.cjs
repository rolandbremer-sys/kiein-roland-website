const { test, expect } = require('@playwright/test');

const projectPath = '/kiein-roland-website/';

test('project subpath loads assets and keeps Czech across refresh after a language change', async ({ page }) => {
  const script = page.waitForResponse(response => new URL(response.url()).pathname === projectPath + 'script.js');
  const styles = page.waitForResponse(response => new URL(response.url()).pathname === projectPath + 'styles.css');
  const document = await page.goto(projectPath + '?lang=en');
  expect(document.status()).toBe(200);
  expect((await script).status()).toBe(200);
  expect((await styles).status()).toBe(200);

  const pricing = page.locator('#pricing');
  await expect(pricing.getByRole('heading', { name: 'Plans and pricing' })).toBeVisible();
  await expect(pricing.locator('article')).toHaveCount(10);

  const picker = page.locator('#lang');
  await picker.selectOption('de');
  await expect(pricing.getByRole('heading', { name: 'Tarife', exact: true })).toBeVisible();
  await picker.selectOption('cs');
  await expect(pricing.getByRole('heading', { name: 'Tarify', exact: true })).toBeVisible();
  await page.reload();
  await expect(picker).toHaveValue('cs');
  await expect(page.locator('html')).toHaveAttribute('lang', 'cs');
  await expect(page.getByRole('navigation', { name: 'Hlavní navigace' })).toBeVisible();
  await expect(page.getByRole('combobox', { name: 'Vyberte jazyk' })).toBeVisible();

  await page.getByRole('button', { name: 'Spustit simulovanou kontrolu' }).click();
  await expect(page.locator('#demoResult')).toContainText('Událost dveří');
  await picker.selectOption('en');
  await expect(page.locator('#demoResult')).toContainText('Door event recorded');
});

test('mobile pricing displays all plans and the recurring weekly disclosure without checkout', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(projectPath + '?lang=cs');

  const pricing = page.locator('#pricing');
  await expect(pricing.locator('article')).toHaveCount(10);
  await expect(pricing).toContainText('EUR bez DPH');
  const trial = pricing.locator('[data-plan="test"]');
  await expect(trial).toContainText('2 € / týden');
  await expect(trial).toContainText('Týdenní předplatné se obnovuje každý týden až do zrušení.');
  await expect(pricing.locator('[data-plan="owner-250"]')).toContainText('599 € / měsíc');
  await expect(pricing.locator('a, button, form, iframe')).toHaveCount(0);

  const viewport = await pricing.evaluate(section => ({
    viewportWidth: document.documentElement.clientWidth,
    sectionWidth: section.scrollWidth,
  }));
  expect(viewport.sectionWidth).toBeLessThanOrEqual(viewport.viewportWidth);
});
