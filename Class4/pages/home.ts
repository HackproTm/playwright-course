import { expect, Locator, Page } from '@playwright/test';

 export class Home {
    readonly page: Page;
    readonly logoAutomation: Locator;
    readonly btnLogin: Locator;

    constructor(page: Page) {
      this.page = page;
      this.logoAutomation = page.getByAltText('Website for automation practice');
      this.btnLogin = page.getByRole('link', { name: 'Signup / Login' });
    }

    async navigateToLogin() {
      await expect(this.logoAutomation).toBeVisible();
      await this.btnLogin.click();
    }
 }
