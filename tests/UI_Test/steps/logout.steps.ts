import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../fixture/fixtures';

const { When, Then } = createBdd(test);

// ============ Logout Test Steps ============

/**
 * Click the menu/hamburger button
 */
When('I click the menu button', async ({ loginPage }) => {
    console.log('Clicking menu button');
    await loginPage.clickMenuButton();
    console.log('✓ Menu button clicked');
});

/**
 * Click the logout option
 */
When('I click the logout option', async ({ loginPage }) => {
    console.log('Clicking logout option');
    await loginPage.clickLogoutButton();
    console.log('✓ Logged out successfully');
});

/**
 * Verify user is logged out (on login page)
 */
Then('I should be logged out', async ({ loginPage }) => {
    console.log('Verifying user is logged out');
    const isUsernameVisible = await loginPage.isUsernameFieldVisible();
    expect(isUsernameVisible).toBe(true);
    console.log('✓ User is logged out - back on login page');
});
