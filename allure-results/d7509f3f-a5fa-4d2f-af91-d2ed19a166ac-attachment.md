# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\UI_Test\feature\login.feature.spec.js >> Verify login >> Verify user is able to login with valid credentials
- Location: .features-gen\tests\UI_Test\feature\login.feature.spec.js:6:7

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://ecommerce-playground.lambdatest.io/", waiting until "load"

```

# Test source

```ts
  1  | import { Locator } from "@playwright/test";
  2  | import { Page } from "@playwright/test";
  3  | import { url } from "node:inspector";
  4  | import { BasePage } from "./basePage";
  5  | 
  6  | 
  7  | export class LoginPage extends BasePage {
  8  | 
  9  |     readonly my_account_Btn: Locator;
  10 |     readonly email_box: Locator;
  11 |     readonly password_box: Locator;
  12 |     readonly loginButton: Locator;
  13 | 
  14 |     constructor(page: Page) {
  15 |         super(page);
  16 |         this.my_account_Btn = page.getByRole('button', { name: 'My account' });
  17 |         this.email_box = page.getByPlaceholder('E-Mail Address');
  18 |         this.password_box = page.getByPlaceholder('Password');
  19 |         this.loginButton = page.locator("input[value='Login']");
  20 |     }
  21 | 
  22 |     async navigateToURL(url: string) {
> 23 |         await this.page.goto(url);
     |                         ^ Error: page.goto: Target page, context or browser has been closed
  24 |     }
  25 |     async clickMyAccount() {
  26 |         await this.my_account_Btn.click();
  27 |     }
  28 |     async enterEmail(email: string) {
  29 |         await this.email_box.fill(email);
  30 |     }
  31 |     async enterPassword(password: string) {
  32 |         await this.password_box.fill(password);
  33 |     }
  34 |     async clickLogin() {
  35 |         await this.loginButton.click();
  36 |     }
  37 | 
  38 | 
  39 | }
```