import { test as base } from "playwright-bdd";
import * as Pages from "../page/index";
import { Page } from "@playwright/test";

type MyFixtures = {
    loginPage: Pages.LoginPage;
};

const createTestFunction = <T extends new (page: Page) => InstanceType<T>>(PageClass: T) =>
    async ({ page }: { page: Page }, use: (fixtures: InstanceType<T>) => Promise<void>) =>
        await use(new PageClass(page));

export const test = base.extend<MyFixtures>({
     loginPage: createTestFunction(Pages.LoginPage)

});