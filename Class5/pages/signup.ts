import { Locator, Page } from '@playwright/test';

 export class SignUp {
    readonly page: Page;
    readonly lblAutomation: Locator;
    readonly rbtTitleMr: Locator;
    readonly rbtTitleMrs: Locator;
    readonly txtPassword: Locator;
    readonly lstDayBirth: Locator;
    readonly lstMonthBirth: Locator;
    readonly lstYearBirth: Locator;
    readonly chkNewsLetter: Locator;
    readonly chkOffers: Locator;
    readonly txtFirstName: Locator;
    readonly txtLastName: Locator;
    readonly txtCompany: Locator;
    readonly txtAddress1: Locator;
    readonly txtAddress2: Locator;
    readonly lstCountry: Locator;
    readonly txtState: Locator;
    readonly txtCity: Locator;
    readonly txtZipCode: Locator;
    readonly txtMobileNumber: Locator;
    readonly btnCreate: Locator;

    constructor(page: Page) {
      this.page = page;
      this.lblAutomation = page.getByText('ENTER ACCOUNT INFORMATION');
      this.rbtTitleMr = page.getByRole('radio', { name: 'Mr.' });
      this.rbtTitleMrs = page.getByRole('radio', { name: 'Mrs.' });
      this.txtPassword = page.locator('#password');
      this.lstDayBirth = page.locator('#days');
      this.lstMonthBirth = page.locator('#months');
      this.lstYearBirth = page.locator('#years');
      this.chkNewsLetter = page.locator('#newsletter');
      this.chkOffers = page.locator('#optin');
      this.txtFirstName = page.locator('#first_name');
      this.txtLastName = page.locator('#last_name');
      this.txtCompany = page.locator('#company');
      this.txtAddress1 = page.locator('#address1');
      this.txtAddress2 = page.locator('#address2');
      this.lstCountry = page.locator('#country');
      this.txtState = page.getByRole('textbox', { name: 'State *' });
      this.txtCity = page.getByRole('textbox', { name: 'City *' });
      this.txtZipCode = page.locator('#zipcode');
      this.txtMobileNumber = page.locator('#mobile_number');
      this.btnCreate = page.getByRole('button', { name: 'Create Account' });
    }

    async selectTitle(title: boolean) {
      if (title) {
        await this.rbtTitleMr.click();
      } else {
        await this.rbtTitleMrs.click();
      }
    }

    async fillPassword(password: string) {
      await this.txtPassword.fill(password);
    }

    async selectDayBirth(day: number) {
      await this.lstDayBirth.selectOption(day.toString());
    }

    async selectMonthBirth(month: string) {
      await this.lstMonthBirth.selectOption(month);
    }

    async selectYearBirth(year: number) {
      await this.lstYearBirth.selectOption(year.toString());
    }

    async selectNewsLetter(newsLetter: boolean) {
      if ((newsLetter && !await this.chkNewsLetter.isChecked()) || (!newsLetter && await this.chkNewsLetter.isChecked())) {
        await this.chkNewsLetter.click();
      }
    }

    async selectOffers(offers: boolean) {
      if ((offers && !await this.chkOffers.isChecked()) || (!offers && await this.chkOffers.isChecked())) {
        await this.chkOffers.click();
      }
    }

    async fillFirstName(firstName: string) {
      await this.txtFirstName.fill(firstName);
    }

    async fillLastName(lastName: string) {
      await this.txtLastName.fill(lastName);
    }

    async fillCompany(company: string) {
      await this.txtCompany.fill(company);
    }

    async fillAddress1(address: string) {
      await this.txtAddress1.fill(address);
    }

    async fillAddress2(address: string) {
      await this.txtAddress2.fill(address);
    }

    async selectCountry(country: string) {
      await this.lstCountry.selectOption(country);
    }

    async fillState(state: string) {
      await this.txtState.fill(state);
    }

    async fillCity(city: string) {
      await this.txtCity.fill(city);
    }

    async fillZipCode(zipcode: number) {
      await this.txtZipCode.fill(zipcode.toString());
    }

    async fillMobileNumber(mobile: string) {
      await this.txtMobileNumber.fill(mobile);
    }

    async clickCreateAccount() {
      await this.btnCreate.click();
    }
 }
