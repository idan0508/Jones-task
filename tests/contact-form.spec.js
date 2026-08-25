import { test, expect } from '@playwright/test';

test('Jones Contact Form Automation', async ({ page }) => {
    await page.goto('https://test.netlify.app/');

    //  Fill out the contact form fields
    await page.getByRole('textbox', { name: 'Name *' }).fill('Idan Dahan');
    await page.getByRole('textbox', { name: 'Email *' }).fill('Idan@gmail.com');
    await page.getByRole('textbox', { name: 'Phone *' }).fill('050-1234567');
    await page.getByRole('textbox', { name: 'Company' }).fill('Ruppin');
    await page.getByRole('textbox', { name: 'Website' }).fill('https://www.linkedin.com/in/idan-dahan-364b80274/');

    // Select the number of employees (Bonus requirement)
    await page.getByLabel('Number of Employees').selectOption('51-500');

    // Capture a full-page screenshot before submitting
    await page.screenshot({ path: 'before-submit.png', fullPage: true });

    await page.getByRole('button', { name: 'Request a call back' }).click();

    // Wait for the Thank You page to load, then log success
    await page.waitForLoadState('networkidle');
    console.log('Form submitted successfully and reached the Thank You page!');
});