import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../fixture/fixtures';

const { When, Then } = createBdd(test);

// ============ Shopping Cart Test Steps ============

/**
 * Add a product to cart
 */
When('I add {string} to the cart', async ({ cartPage }, productName: string) => {
    console.log(`Adding "${productName}" to cart`);
    await cartPage.addProductToCart(productName);
});

/**
 * Add multiple products to cart
 */
When('I add the following products to the cart:', async ({ cartPage }, dataTable) => {
    console.log('Adding multiple products to cart');
    const products = dataTable.raw().flat();
    
    for (const product of products) {
        await cartPage.addProductToCart(product);
    }
});

/**
 * Navigate to the shopping cart
 */
When('I navigate to the shopping cart', async ({ cartPage }) => {
    console.log('Navigating to shopping cart');
    await cartPage.navigateToCart();
});

/**
 * Verify products are in the cart
 */
Then('I should see the following products in the cart:', async ({ cartPage }, dataTable) => {
    console.log('Verifying products in cart');
    const expectedProducts = dataTable.raw().flat();
    
    const cartItems = await cartPage.getCartItemNames();
    console.log(`✓ Products in cart: ${cartItems.join(', ')}`);
    
    for (const product of expectedProducts) {
        const found = cartItems.some(item => 
            item.toLowerCase().includes(product.toLowerCase()) || 
            product.toLowerCase().includes(item.toLowerCase())
        );
        expect(found, `Expected to find "${product}" in cart`).toBe(true);
    }
});

/**
 * Verify specific number of items in cart
 */
Then('the cart should contain {int} product(s)', async ({ cartPage }, expectedCount: number) => {
    console.log(`Verifying cart contains ${expectedCount} product(s)`);
    const actualCount = await cartPage.getTotalItemsInCart();
    expect(actualCount).toBe(expectedCount);
    console.log(`✓ Cart contains ${actualCount} product(s)`);
});

/**
 * Remove a product from cart
 */
When('I remove {string} from the cart', async ({ cartPage }, productName: string) => {
    console.log(`Removing "${productName}" from cart`);
    await cartPage.removeProductFromCart(productName);
});

/**
 * Verify product is not in cart
 */
Then('I should not see {string} in the cart', async ({ cartPage }, productName: string) => {
    console.log(`Verifying "${productName}" is not in cart`);
    const cartItems = await cartPage.getCartItemNames();
    const found = cartItems.some(item => 
        item.toLowerCase().includes(productName.toLowerCase())
    );
    expect(found).toBe(false);
    console.log(`✓ "${productName}" is not in cart`);
});

/**
 * Verify cart is empty
 */
Then('the cart should be empty', async ({ cartPage }) => {
    console.log('Verifying cart is empty');
    const itemCount = await cartPage.getTotalItemsInCart();
    expect(itemCount).toBe(0);
    console.log('✓ Cart is empty');
});

/**
 * Click checkout
 */
When('I click the checkout button', async ({ cartPage }) => {
    console.log('Clicking checkout button');
    await cartPage.clickCheckout();
});

/**
 * Click continue shopping
 */
When('I click the continue shopping button', async ({ cartPage }) => {
    console.log('Clicking continue shopping button');
    await cartPage.clickContinueShopping();
});
