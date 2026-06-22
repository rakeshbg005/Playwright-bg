import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";

/**
 * CartPage - Page Object Model for Sauce Demo Shopping Cart
 * Encapsulates all cart-related interactions and locators
 */
export class CartPage extends BasePage {

    // Cart Page Locators
    readonly cartLink: Locator;
    readonly cartBadge: Locator;
    readonly cartItems: Locator;
    readonly cartItemNames: Locator;
    readonly removeButtons: Locator;
    readonly checkoutButton: Locator;
    readonly continueShoppingButton: Locator;

    constructor(page: Page) {
        super(page);
        // Shopping cart link in header
        this.cartLink = page.locator('[data-test="shopping-cart-link"]');
        // Cart item counter badge
        this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
        // All items in cart
        this.cartItems = page.locator('[data-test="cart-list"] [data-test="inventory-item"]');
        // Item names
        this.cartItemNames = page.locator('[data-test="inventory-item-name"]');
        // Remove buttons
        this.removeButtons = page.locator('[data-test^="remove-"]');
        // Checkout button
        this.checkoutButton = page.locator('[data-test="checkout"]');
        // Continue shopping button
        this.continueShoppingButton = page.locator('[data-test="continue-shopping"]');
    }

    /**
     * Add a product to cart by product name
     * @param productName - Name of the product to add
     */
    async addProductToCart(productName: string) {
        // Find the inventory item container that contains the product name
        const inventoryItem = this.page.locator('[data-test="inventory-item"]').filter({
            has: this.page.locator(`text="${productName}"`)
        }).first();
        
        // Find and click the add to cart button within that item
        const addButton = inventoryItem.locator('[data-test^="add-to-cart-"]');
        await addButton.click();
        
        console.log(`✓ Added "${productName}" to cart`);
    }

    /**
     * Get count of items in cart (from badge)
     */
    async getCartItemCount(): Promise<number> {
        try {
            const badgeText = await this.cartBadge.textContent();
            return badgeText ? parseInt(badgeText, 10) : 0;
        } catch {
            return 0;
        }
    }

    /**
     * Navigate to the shopping cart
     */
    async navigateToCart() {
        await this.cartLink.click();
        await this.page.waitForLoadState('networkidle');
        console.log('✓ Navigated to cart');
    }

    /**
     * Get all item names currently in the cart
     */
    async getCartItemNames(): Promise<string[]> {
        const names: string[] = [];
        const count = await this.cartItems.count();
        
        for (let i = 0; i < count; i++) {
            const nameLocator = this.cartItems.nth(i).locator('[data-test="inventory-item-name"]');
            const name = await nameLocator.textContent();
            if (name) {
                names.push(name.trim());
            }
        }
        return names;
    }

    /**
     * Remove a product from cart by product name
     * @param productName - Name of the product to remove
     */
    async removeProductFromCart(productName: string) {
        // Find the inventory item container that contains the product name
        const inventoryItem = this.page.locator('[data-test="inventory-item"]').filter({
            has: this.page.locator(`text="${productName}"`)
        }).first();
        
        // Find and click the remove button within that item
        const removeButton = inventoryItem.locator('[data-test^="remove-"]');
        await removeButton.click();
        
        console.log(`✓ Removed "${productName}" from cart`);
    }

    /**
     * Validate that specific products are in the cart
     * @param productNames - Array of product names to validate
     */
    async validateProductsInCart(productNames: string[]): Promise<boolean> {
        const cartItems = await this.getCartItemNames();
        const allPresent = productNames.every(name => 
            cartItems.some(item => item.includes(name) || name.includes(item.split(' ')[0]))
        );
        return allPresent;
    }

    /**
     * Get total number of items in cart
     */
    async getTotalItemsInCart(): Promise<number> {
        return await this.cartItems.count();
    }

    /**
     * Click checkout button
     */
    async clickCheckout() {
        await this.checkoutButton.click();
        await this.page.waitForLoadState('networkidle');
        console.log('✓ Clicked checkout');
    }

    /**
     * Click continue shopping button
     */
    async clickContinueShopping() {
        await this.continueShoppingButton.click();
        await this.page.waitForLoadState('networkidle');
        console.log('✓ Clicked continue shopping');
    }
}
