import { expect, Locator, Page } from '@playwright/test';

export class Login {
  readonly page: Page;
  readonly lblNewUser: Locator;
  readonly txtName: Locator;
  readonly txtEmail: Locator;
  readonly btnSignUp: Locator;

  constructor(page: Page){
    this.page = page
    this.lblNewUser = page.getByText('New User Signup!')
    this.txtName = page.getByPlaceholder('Name')
    this.txtEmail = page.locator('[data-qa="signup-email"]')
    this.btnSignUp = page.getByRole('button',{name:'Signup'})
  }

  async fillName(name: string) {
    await this.txtName.fill(name)
  }
  async fillEmail(email: string) {
    await this.txtEmail.fill(email)
  }

  async clickSignUpBtn(){
    await this.btnSignUp.click()
  }

  async labelNewUserIsVisible(): Promise<boolean> {
    return await this.lblNewUser.isVisible();
  }

  async signUp(name: string, email: string) {
    await this.fillName(name);
    await this.fillEmail(email);
    await this.clickSignUpBtn();
  }
}
