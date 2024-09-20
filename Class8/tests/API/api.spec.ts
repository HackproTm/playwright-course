import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import Ajv from 'ajv';

import * as dotenv from 'dotenv';
dotenv.config();

//SCHEMAS
const schemaloginuser = require('../../schemas/loginUser.json');
const schemaRegisterUser = require('../../schemas/registerUser.json');

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
  const ajv = new Ajv();
  const nameUser = faker.internet.userName();
  const emailUser = faker.internet.email().toLowerCase();
  const passwordUser = faker.internet.password();
  var token = '';

  test.beforeEach(async ({ request }) => {
    const response = await request.post('https://practice.expandtesting.com/notes/api/users/login', {
      data: {
        "email": process.env.USER_TEST,
        "password": process.env.PASSWORD_TEST
      }
    });

    test.step('Verify the response status code is 200', async () => {
      expect(response.status()).toBe(200);
    });

    const responseBody = await response.json();
    token = responseBody.data.token;
  })

  test('1 - Register new user', async ({ request }) => {
    const response = await request.post('https://practice.expandtesting.com/notes/api/users/register', {
      data: {
        "name": nameUser,
        "email": emailUser,
        "password": passwordUser
      }
    });

    test.step('Verify the response status code is 201', async () => {
      expect(response.status()).toBe(201);
    });

    const responseBody =  await response.json()

    test.step('Verify the response body contains the expected data', async () => {
      const valid = ajv.validate(schemaRegisterUser, responseBody);
      if (!valid) {
        console.error('AJV Validation Errors: ', ajv.errorsText());
      }
      expect(valid).toBe(true);
      expect(responseBody.data.name).toEqual(nameUser);
      expect(responseBody.data.email).toEqual(emailUser);
    });
  })

  test('2 - Get user profile', async ({ request }) => {
    const response = await request.get('https://practice.expandtesting.com/notes/api/users/profile', {
      headers: {
        'x-auth-token': token
      }
    });

    test.step('Verify the response status code is 200', async () => {
      expect(response.status()).toBe(200);
    });

    const responseBody = await response.json();
    console.log('Response: ', responseBody);
  })
})
