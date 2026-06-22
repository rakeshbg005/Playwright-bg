import { test as base, createBdd } from "playwright-bdd";
import * as Pages from "../page/index";
import { Page } from "@playwright/test";

type MyFixtures = {
    loginPage: Pages.LoginPage;
    inventoryLandingPage: Pages.InventoryLandingPage;
    cartPage: Pages.CartPage;
};

const createTestFunction = <T extends new (page: Page) => InstanceType<T>>(PageClass: T) =>
    async ({ page }: { page: Page }, use: (fixtures: InstanceType<T>) => Promise<void>) =>
        await use(new PageClass(page));

export const test = base.extend<MyFixtures>({
    loginPage: createTestFunction(Pages.LoginPage),
    inventoryLandingPage: createTestFunction(Pages.InventoryLandingPage),
    cartPage: createTestFunction(Pages.CartPage)

});