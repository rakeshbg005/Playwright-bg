import { Locator } from "@playwright/test";
import { Page } from "@playwright/test";
import { BasePage } from "./basePage";

/**
 * LoginPage - Page Object Model for Sauce Demo Login
 * Encapsulates all login-related interactions and locators
 */
export class LoginPage extends BasePage {

    // Sauce Demo Login Page Locators
    readonly username_input: Locator;
    readonly password_input: Locator;
    readonly loginButton: Locator;
    readonly menuButton: Locator;
    readonly logoutButton: Locator;

    constructor(page: Page) {
        super(page);
        // Sauce Demo uses data-test attributes for reliable element identification
        this.username_input = page.locator('[data-test="username"]');
        this.password_input = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
        // Menu and logout locators
        this.menuButton = page.locator('#react-burger-menu-btn');
        this.logoutButton = page.locator('[data-test="logout-sidebar-link"]');
    }

    /**
     * Navigate to a given URL
     * @param url - The URL to navigate to
     */
    async navigateToURL(url: string) {
        await this.page.goto(url);
    }

    /**
     * Enter username in the username input field
     * @param username - Username to enter
     */
    async enterUsername(username: string) {
        await this.username_input.fill(username);
    }

    /**
     * Enter password in the password input field
     * @param password - Password to enter
     */
    async enterPassword(password: string) {
        await this.password_input.fill(password);
    }

    /**
     * Click the Login button
     */
    async clickLogin() {
        await this.loginButton.click();
    }

    /**
     * Click the menu/hamburger button
     */
    async clickMenuButton() {
        await this.menuButton.click();
        // Wait for menu to appear
        await this.page.waitForTimeout(500);
    }

    /**
     * Click the logout option
     */
    async clickLogoutButton() {
        await this.logoutButton.waitFor({ state: 'visible', timeout: 5000 });
        await this.logoutButton.click();
        await this.page.waitForLoadState('networkidle');
    }

    /**
     * Verify username field is visible (used to confirm login page is displayed)
     */
    async isUsernameFieldVisible(): Promise<boolean> {
        return await this.username_input.isVisible();
    }

}