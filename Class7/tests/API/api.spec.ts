import { test, expect } from '@playwright/test';

import * as dotenv from 'dotenv';
dotenv.config();

test.describe('API List', () => {
  test('1 - GET All Products List', async ({ request }) => {
    const response = await request.get(process.env.BASE_URL + '/api/productsList');
    expect(response.status()).toBe(200);
  })

  test('2 - POST All Products list', async ({ request }) => {
    const response = await request.post(process.env.BASE_URL + '/api/productsList');
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody.responseCode).toBe(405);
  })

  test ('3 - PUT To All Brands List', async ({ request }) => {
    const response = await request.put(process.env.BASE_URL + '/api/brandsList', {
      data: {
        brands:[
          {
            id: '1',
            brand:'Test'
          }
        ]
      }
    });
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody.responseCode).toBe(405);
  })

  test ('4 - DELETE verifyLogin', async({ request }) => {
    const response = await request.delete(process.env.BASE_URL + '/api/verifyLogin');
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody.responseCode).toBe(405);
  })
})

test.describe('API With Data', async()=>{
  test('1 - Register new user', async ({ request }) => {
    const response = await request.post('https://practice.expandtesting.com/notes/api/users/register', {
      data: {
        "name": "testAutomation",
        "email":"prueba2@testautomation.com",
        "password":"test1234*"
      }
    });
    expect(response.status()).toBe(201);
  })
})
