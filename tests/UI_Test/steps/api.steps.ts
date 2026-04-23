// tests/UI_Test/steps/api.steps.ts
import { Given, When, Then } from '../fixture/api.fixtures';  // ✅ correct path
import { request, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

Given('I have the base product template from {string}', async ({ apiState }, fileName: string) => {
    const filePath = path.join(__dirname, `../test-data/${fileName}`);
    apiState.requestBody = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    apiState.apiContext = await request.newContext({
        baseURL: process.env.Rest_API_URL,
        extraHTTPHeaders: { 'Content-Type': 'application/json' }
    });
});

When('I send a {string} request to {string}', async ({ apiState }, method: string, endpoint: string) => {
    const options = { data: apiState.requestBody };
    apiState.response = await (apiState.apiContext as any)[method.toLowerCase()](endpoint, options);
    const body = await apiState.response!.json();
    if (body.id) {
        apiState.createdId = body.id;
    }
});

Given('I have the endpoint {string}', async ({ apiState }, endpoint: string) => {
    apiState.endpoint = endpoint;
});

// ✅ Fix - use the same env variable
When('I send a GET request with parameters {string}', async ({ apiState }, params: string) => {
    const fullUrl = `${apiState.endpoint}?${params}`;
    const apiRequest = await request.newContext({
        baseURL: process.env.Rest_API_URL  // ← same as line 11
    });
    apiState.response = await apiRequest.get(fullUrl);
});

Then('the response status should be {int}', async ({ apiState }, expectedStatus: number) => {
    expect(apiState.response!.status()).toBe(expectedStatus);
});

Then('the response should contain {int} products', async ({ apiState }, expectedCount: number) => {
    const body = await apiState.response!.json();
    expect(body.products).toHaveLength(expectedCount);
    body.products.forEach((product: any) => {
        expect(product).toHaveProperty('title');
        expect(product).toHaveProperty('price');
    });
});