# Playwright-bg
playwright implementation

## Setup and Run

1. Clone repository:

   ```bash
   git clone https://github.com/rakeshbg005/Playwright-bg.git
   cd Playwright-bg
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Install dotenv and cross-env:

   ```bash
   npm install dotenv --save
   npm install -D cross-env
   ```

4. Install Playwright browsers (recommended):

   ```bash
   npx playwright install
   ```

5. Generate BDD artifacts:

   ```bash
   npx bddgen
   ```

6. Run tests:

   ```bash
   npx playwright test --headed --workers=1
   ```

7. Run tests for a specific environment and tag:

   ```powershell
   $env:ENVIRONMENT="int"; npx bddgen; npx playwright test --grep "@test1" --headed --workers=1
   ```

## Troubleshooting

- If `npx bddgen` says install `playwright-bdd`, run:
  ```bash
  npm install -D playwright-bdd
  ```
- If Playwright says `Cannot find module '@playwright/test'`, ensure dependencies are installed with `npm install` and rerun.
- For CI and repeatable setup, add scripts in `package.json`:

  ```json
  "scripts": {
    "setup": "npm install && npx playwright install",
    "bddtest": "cross-env ENVIRONMENT=int npx bddgen && npx playwright test --grep \"@test1\" --headed --workers=1"
  }
  ```

- To run the environment/tag command directly on Windows PowerShell:
  ```powershell
  $env:ENVIRONMENT="int"; npx bddgen; npx playwright test --grep "@test1" --headed --workers=1

# Order of Adding web Test cases with new pages 
   Summary of order:

# 1. Page class → extends BasePage
 ```typescript
import { Locator } from "@playwright/test";
import { Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class ProductPage extends BasePage {
    readonly addToCartBtn: Locator;
    readonly productTitle: Locator;
    readonly priceLabel: Locator;

    constructor(page: Page) {
        super(page);
        this.addToCartBtn = page.locator('button:has-text("Add to cart")');
        this.productTitle = page.locator('h1.product-title');
        this.priceLabel = page.locator('.price');
    }

    async addProductToCart() {
        await this.addToCartBtn.click();
    }

    async getProductTitle(): Promise<string | null> {
        return await this.productTitle.textContent();
    }
}
```
# 2. index.ts → export all pages
 ```typescript
export { LoginPage } from './loginPage';
export { ProductPage } from './productPage';
```
# 3.fixtures.ts → add to type and extend
 ```typescript
import { test as base } from "playwright-bdd";
import * as Pages from "../page/index";
import { Page } from "@playwright/test";

type MyFixtures = {
    loginPage: Pages.LoginPage;
    productPage: Pages.ProductPage;
};

const createTestFunction = <T extends new (page: Page) => InstanceType<T>>(PageClass: T) =>
    async ({ page }: { page: Page }, use: (fixtures: InstanceType<T>) => Promise<void>) =>
        await use(new PageClass(page));

export const test = base.extend<MyFixtures>({
    loginPage: createTestFunction(Pages.LoginPage),
    productPage: createTestFunction(Pages.ProductPage)
});
```
# 4.steps file → use new fixture
 ```typescript
import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../fixture/fixtures';

const { Given, When, Then } = createBdd(test);

When('I add product to cart', async ({ productPage }) => {
    console.log('Adding product to cart');
    await productPage.addProductToCart();
});

Then('I should see product title {string}', async ({ productPage }, title) => {
    const actualTitle = await productPage.getProductTitle();
    expect(actualTitle).toContain(title);
});
```
# 5. feature file → write scenarios
 ```typescript
Feature: Product Page Tests
  @test2
  Scenario: Add product to cart
    Given I navigate to base url
    When I add product to cart
    Then I should see product title "iPhone" 
```


# Fixture desinged 
```
 playwright-bdd base
      ↓
 fixtures.ts          (adds loginPage)   → used by login.steps.ts
      ↓
 api.fixtures.ts      (adds apiState)    → used by api.steps.ts
      ↓
importTestFrom points here (has everything)

This way both your web and API tests share the same fixture chain with no conflicts.
```
