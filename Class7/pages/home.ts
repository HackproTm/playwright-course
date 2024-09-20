import { expect, Locator, Page } from '@playwright/test';

 export class Home {
    readonly page: Page;
    readonly logoAutomation: Locator;
    readonly btnLogin: Locator;
    readonly btnLogout: Locator;
    readonly btnContact: Locator;

    constructor(page: Page) {
      this.page = page;
      this.logoAutomation = page.getByAltText('Website for automation practice');
      this.btnLogin = page.getByRole('link', { name: 'Signup / Login' });
      this.btnLogout = page.getByRole('link', { name: 'Logout' });
      this.btnContact = page.getByRole('link', { name: 'Contact us'});
    }

    async navigateToLogin() {
      await expect(this.logoAutomation).toBeVisible();
      await this.btnLogin.click();
    }

    async navigateToContactUs() {
      await this.btnContact.click();
    }

    async clickLogout() {
      await this.btnLogout.click();
    }

    async logoutIsVisible(): Promise<boolean> {
      return await this.btnLogout.isVisible();
    }
 }
