import { Locator, Page } from '@playwright/test';

export class Login {
  readonly page: Page;
  readonly lblNewUser: Locator;
  readonly txtName: Locator;
  readonly txtSingUpEmail: Locator;
  readonly btnSignUp: Locator;
  readonly txtLoginEmail: Locator;
  readonly txtPassword: Locator;
  readonly btnLogin: Locator;
  readonly lblIncorrectCredentials: Locator;

  constructor(page: Page){
    this.page = page;
    this.lblNewUser = page.getByText('New User Signup!');
    this.txtName = page.getByPlaceholder('Name');
    this.txtSingUpEmail = page.locator('[data-qa="signup-email"]');
    this.btnSignUp = page.getByRole('button', { name: 'Signup' });
    this.txtLoginEmail = page.locator('[data-qa="login-email"]');
    this.txtPassword = page.getByRole('textbox', { name: 'Password' });
    this.btnLogin = page.getByRole('button', { name: 'Login' });
    this.lblIncorrectCredentials = page.getByText('Your email or password is incorrect!');
  }

  async fillName(name: string) {
    await this.txtName.fill(name);
  }

  async fillSignUpEmail(email: string) {
    await this.txtSingUpEmail.fill(email);
  }

  async fillLoginEmail(email: string) {
    await this.txtLoginEmail.fill(email);
  }

  async fillPassword(password: string) {
    await this.txtPassword.fill(password);
  }

  async clickSignUpBtn(){
    await this.btnSignUp.click();
  }

  async clickLoginBtn(){
    await this.btnLogin.click();
  }

  async labelNewUserIsVisible(): Promise<boolean> {
    return await this.lblNewUser.isVisible();
  }

  async labelWrongUserOrPasswordIsVisible(): Promise<boolean> {
    return await this.lblIncorrectCredentials.isVisible();
  }

  async signUp(name: string, email: string) {
    await this.fillName(name);
    await this.fillSignUpEmail(email);
    await this.clickSignUpBtn();
  }

  async login(email: string, password: string) {
    await this.fillLoginEmail(email);
    await this.fillPassword(password);
    await this.clickLoginBtn();
  }
}
