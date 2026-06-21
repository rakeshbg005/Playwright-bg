import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../fixture/fixtures';

const { Then } = createBdd(test);

// ============ Sauce Demo Inventory Landing Page Test Steps ============

/**
 * Verify that the user has successfully logged in and sees the products page
 * Checks:
 * 1. URL contains 'inventory' (products page)
 * 2. Product layout is visible using InventoryLandingPage
 * 3. Expected number of products are displayed
 */
Then('I should see the products page', async ({ loginPage, inventoryLandingPage }) => {
    console.log('Verifying products page is displayed');
    // Verify URL changed to inventory page
    await expect(loginPage.page).toHaveURL(/.*inventory/);
    
    // Verify product layout is visible using InventoryLandingPage
    const isLayoutVisible = await inventoryLandingPage.isProductLayoutVisible();
    expect(isLayoutVisible).toBe(true);
    console.log('✓ Product layout is visible on Inventory page');
    
    // Verify expected number of products (Sauce Demo has 6 products)
    const productCount = await inventoryLandingPage.getProductCount();
    expect(productCount).toBe(6);
    console.log(`✓ Found ${productCount} products on inventory page`);
});

/**
 * Verify product layout is displayed
 */
Then('the product layout should be visible', async ({ inventoryLandingPage }) => {
    console.log('Verifying product layout is visible');
    const isLayoutVisible = await inventoryLandingPage.isProductLayoutVisible();
    expect(isLayoutVisible).toBe(true);
    console.log('✓ Product layout is visible');
});

/**
 * Verify the expected number of products
 */
Then('I should see {int} products on the inventory page', async ({ inventoryLandingPage }, expectedCount: number) => {
    console.log(`Verifying ${expectedCount} products are displayed`);
    const productCount = await inventoryLandingPage.getProductCount();
    expect(productCount).toBe(expectedCount);
    console.log(`✓ Found ${productCount} products on inventory page`);
});
