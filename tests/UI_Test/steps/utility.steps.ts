import { createBdd } from 'playwright-bdd';

import { test } from '../fixture/fixtures';

const {When} = createBdd(test);

// ============ Utility Steps ============

/**
 * Wait/delay for specified seconds
 * Useful for visual verification during test execution
 *
 * Usage Examples:
 * - And I wait for 2 second(s)
 * - When I wait for 3 second(s)
 */
When(/I wait for (\d+) second\(s\)/, async ({ page }, seconds: number) => {
    console.log(` Waiting for ${seconds} second(s)...`);
    // Wait for the page to be in a stable state first
    await page.waitForLoadState('networkidle').catch(() => {});
    // Then apply the additional delay
    await new Promise((resolve) => setTimeout(resolve, seconds * 1000));
    console.log(`✓ Wait completed`);
});
