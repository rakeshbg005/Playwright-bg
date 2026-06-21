import { Locator } from "@playwright/test";
import { Page } from "@playwright/test";
import { BasePage } from "./basePage";

/**
 * InventoryLandingPage - Page Object Model for Sauce Demo Inventory/Products Page
 * Encapsulates all inventory-related interactions and locators
 */
export class InventoryLandingPage extends BasePage {

    // Sauce Demo Inventory Page Locators
    readonly productLayout: Locator;
    readonly productItems: Locator;
    readonly productContainer: Locator;

    constructor(page: Page) {
        super(page);
        // Verify the main product layout container is present
        this.productLayout = page.locator('[data-test="inventory-container"]');
        // Individual product items
        this.productItems = page.locator('[data-test="inventory-item"]');
        // Product container wrapper
        this.productContainer = page.locator('.inventory-list');
    }

    /**
     * Verify that the product layout is visible on the landing page
     */
    async isProductLayoutVisible(): Promise<boolean> {
        return await this.productLayout.isVisible();
    }

    /**
     * Get the count of products displayed on the inventory page
     */
    async getProductCount(): Promise<number> {
        return await this.productItems.count();
    }

    /**
     * Get all product names from the inventory page
     */
    async getAllProductNames(): Promise<string[]> {
        const names: string[] = [];
        const count = await this.getProductCount();
        
        for (let i = 0; i < count; i++) {
            const productName = await this.productItems
                .nth(i)
                .locator('[data-test="inventory-item-name"]')
                .textContent();
            if (productName) {
                names.push(productName.trim());
            }
        }
        return names;
    }
}
