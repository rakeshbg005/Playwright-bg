import { expect, test as baseTest } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../fixture/fixtures';

const { Given, When, Then } = createBdd(test);

// ============ Sauce Demo Login Test Steps ============

/**
 * Navigate to Sauce Demo application
 * URL is read from environment variables (SAUCEDEMO_URL from .env.{environment} file)
 * Ensures the login form is fully loaded before proceeding
 */
Given('I navigate to Sauce Demo application', async ({ loginPage }) => {
    // Get URL from environment variables - must be defined in .env file
    const sauceDemoUrl = process.env.SAUCEDEMO_URL;
    
    if (!sauceDemoUrl) {
        throw new Error('SAUCEDEMO_URL is not defined in environment variables. Please check your .env.{environment} file');
    }
    
    console.log(`🔗 Navigating to Sauce Demo application: ${sauceDemoUrl}`);
    console.log(`📁 Environment: ${process.env.ENVIRONMENT || 'local'}`);
    
    // Navigate to the URL
    await loginPage.navigateToURL(sauceDemoUrl);
    
    // Wait for login form to be fully loaded
    await loginPage.page.waitForLoadState('networkidle');
    
    // Verify we're on the login page
    const title = await loginPage.page.title();
    console.log(`✓ Page loaded successfully. Title: ${title}`);
    
    // Verify login form elements are visible
    const isUsernameFieldVisible = await loginPage.isUsernameFieldVisible();
    if (!isUsernameFieldVisible) {
        throw new Error('Username field is not visible on login page');
    }
    console.log('✓ Login form is ready');
});

/**
 * Enter username on Sauce Demo login page
 */
When('I enter username {string}', async ({ loginPage }, username) => {
    console.log(`Entering username: ${username}`);
    await loginPage.enterUsername(username);
});

/**
 * Enter password on Sauce Demo login page
 */
When('I enter password as {string}', async ({ loginPage }, password) => {
    console.log(`Entering password: ${password}`);
    await loginPage.enterPassword(password);
});

/**
 * Click the Login button on Sauce Demo login page
 * Waits for page navigation to complete after login
 */
When('I click the Login button', async ({ loginPage }) => {
    console.log('Clicking the Login button');
    await loginPage.clickLogin();
    // Wait for navigation after login
    await loginPage.page.waitForLoadState('networkidle');
});

/**
 * Take a screenshot of the successful login page
 * Screenshot is saved with timestamp in 'screenshots' folder
 * Playwright automatically attaches to HTML and Allure reports
 */
Then('I take a screenshot of the successful login', async ({ loginPage }) => {
    console.log('Taking screenshot of successful login page');
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const screenshotPath = `screenshots/login-success-${timestamp}.png`;
    
    try {
        // Create screenshots directory if it doesn't exist
        const fs = require('fs');
        const path = require('path');
        const dir = path.dirname(screenshotPath);
        
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        
        // Take screenshot and save to file
        await loginPage.page.screenshot({
            path: screenshotPath,
            fullPage: true
        });
        
        console.log(`✓ Screenshot saved to: ${screenshotPath}`);
    } catch (error) {
        console.error(`✗ Failed to take screenshot: ${error}`);
        throw error;
    }
});