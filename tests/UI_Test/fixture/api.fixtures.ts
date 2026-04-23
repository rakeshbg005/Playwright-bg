// tests/UI_Test/fixture/api.fixtures.ts
import { test as webTest } from './fixtures';  // ✅ extend web fixture, not base
import { createBdd } from 'playwright-bdd';
import { request, APIRequestContext, APIResponse } from '@playwright/test';

type ApiFixtures = {
    apiState: {
        apiContext: APIRequestContext | null;
        requestBody: any;
        response: APIResponse | null;
        createdId: number | null;
        endpoint: string;
    };
};

export const test = webTest.extend<ApiFixtures>({
    apiState: async ({ }, use) => {
        const state = {
            apiContext: null as APIRequestContext | null,
            requestBody: null,
            response: null as APIResponse | null,
            createdId: null as number | null,
            endpoint: ''
        };
        await use(state);
        // Cleanup runs automatically after each scenario
        if (state.createdId && state.apiContext) {
            console.log(`Cleaning up Product ID: ${state.createdId}`);
            await state.apiContext.delete(`/products/${state.createdId}`);
        }
        if (state.apiContext) {
            await state.apiContext.dispose();
        }
    }
});

export const { Given, When, Then } = createBdd(test);