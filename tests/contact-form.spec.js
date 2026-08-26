import { test, expect } from '@playwright/test';

test('Jones Contact Form Automation', async ({ page }) => {
    await page.goto('https://test.netlify.app/');

    //  Fill out the contact form fields
    await page.getByRole('textbox', { name: 'Name *' }).fill('Idan Dahan Test');
    await page.getByRole('textbox', { name: 'Email *' }).fill('idan.dahan@example.com');
    await page.getByRole('textbox', { name: 'Phone *' }).fill('050-1234567');
    await page.getByRole('textbox', { name: 'Company' }).fill('Jones Automation Test');
    await page.getByRole('textbox', { name: 'Website' }).fill('https://example.com');

    // Select the number of employees (Bonus requirement)
    await page.getByLabel('Number of Employees').selectOption('51-500');

    // Capture a full-page screenshot before submitting
    await page.screenshot({ path: 'before-submit.png', fullPage: true });

    await page.getByRole('button', { name: 'Request a call back' }).click();

    // Verify that the Thank You page was reached
    await expect(page).toHaveURL(/thank-you\.html/);
    console.log('Form submitted successfully and reached the Thank You page!');
});