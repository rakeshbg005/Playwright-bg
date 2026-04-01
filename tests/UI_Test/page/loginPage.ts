import { Locator } from "@playwright/test";
import { Page } from "@playwright/test";
import { url } from "node:inspector";
import { BasePage } from "./basePage";


export class LoginPage extends BasePage {

    readonly my_account_Btn: Locator;
    readonly email_box: Locator;
    readonly password_box: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        super(page);
        this.my_account_Btn = page.getByRole('button', { name: 'My account' });
        this.email_box = page.getByPlaceholder('E-Mail Address');
        this.password_box = page.getByPlaceholder('Password');
        this.loginButton = page.locator("input[value='Login']");
    }

    async navigateToURL(url: string) {
        await this.page.goto(url);
    }
    async clickMyAccount() {
        await this.my_account_Btn.click();
    }
    async enterEmail(email: string) {
        await this.email_box.fill(email);
    }
    async enterPassword(password: string) {
        await this.password_box.fill(password);
    }
    async clickLogin() {
        await this.loginButton.click();
    }


}