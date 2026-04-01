import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../fixture/fixtures';

const { Given, When, Then } = createBdd(test);

Given('I navigate to {string}', async ({loginPage}, url) => {
    console.log(`Navigating to ${url}`);
    await loginPage.navigateToURL(url);
});

Given('click on my account', async ({loginPage}) => {
    console.log(`Clicking on my account`);
    await loginPage.clickMyAccount();
});

Given('I enter E-mail address {string}', async ({loginPage}, email) => {
  console.log(`Entering E-mail address: ${email}`);
  await loginPage.enterEmail(email);
});

Given('I enter password {string}', async ({loginPage}, password) => {
    console.log(`Entering password: ${password}`);
    await loginPage.enterPassword(password);
});

Given('I click on submit button', async ({loginPage}) => {
    console.log(`Clicking on submit button`);
    await loginPage.clickLogin();
});

Then('I should Verify url contains {string}', async ({loginPage}, arg) => {
    console.log(`Verifying url contains: ${arg}`);
    await expect(loginPage.page).toHaveURL(arg);
});

Then('I should Verify user is not able to login and url contains {string}', async ({loginPage}, arg) => {
    console.log(`Verifying user is not able to login and url contains: ${arg}`);
    await expect(loginPage.page).toHaveURL(arg);
});