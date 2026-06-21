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

    constructor(page: Page) {
        super(page);
        // Sauce Demo uses data-test attributes for reliable element identification
        this.username_input = page.locator('[data-test="username"]');
        this.password_input = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
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

}