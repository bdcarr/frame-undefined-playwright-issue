import { test } from '@playwright/test';

async function doAction(action: Function) {
    await action();
}

test('test', async ({ page }) => {
    await page.goto('https://playwright.dev/docs/api/class-locator');
    await doAction(page.getByRole('link', { name: 'count', exact: true }).click);
});
