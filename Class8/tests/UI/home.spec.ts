import { expect, test } from '@playwright/test';
import { Contact } from '../../pages/contact';
import { Home } from '../../pages/home';
import { Login } from '../../pages/login';
import { SignUp } from '../../pages/signup';

test.describe('Automation Exercise', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(process.env.BASE_URL);
  });

  test('Register User', async ({ page }) => {

    await test.step('Navigate To Login Page', async () => {
      const home = new Home(page);
      await home.navigateToLogin();
    });
    await test.step('SignUp Credentials', async () => {
      const login = new Login(page);
      await login.signUp('Hackpro Team', 'hackpro4@yopmail.com');
    });
    await test.step('Create Account', async () => {
      const signUp = new SignUp(page);
      await signUp.selectTitle(true);
      await signUp.fillPassword("ABCD#1234");
      await signUp.selectDayBirth(7);
      await signUp.selectMonthBirth("October");
      await signUp.selectYearBirth(1981);
      await signUp.selectNewsLetter(true);
      await signUp.fillFirstName("Hackpro");
      await signUp.fillLastName("Team");
      await signUp.fillCompany("Hackpro Team");
      await signUp.fillAddress1("1669 Northern Blvd");
      await signUp.fillAddress2("Manhasset");
      await signUp.selectCountry("United States");
      await signUp.fillState("New York");
      await signUp.fillCity("New York");
      await signUp.fillZipCode(11030);
      await signUp.fillMobileNumber("3119873456");
      await signUp.clickCreateAccount();
    });
  });

  test('Login User', async({ page }) => {
    const home = new Home(page);

    await test.step('Navigate To Login Page', async() => {
        await home.navigateToLogin();
    });

    await test.step('Login with credentials', async() => {
        const login = new Login(page);
        await login.login(process.env.USER_TEST, process.env.PASSWORD_TEST);
    });
  });

  test('Login User with incorrect credentials', async({ page })=>{
      const home = new Home(page);

      await test.step('Navigate To Login Page', async()=>{
          await home.navigateToLogin();
      });

      await test.step('Login with incorrect credentials', async()=>{
          const login = new Login(page);
          await login.login(process.env.USER_TEST, process.env.PASSWORD_TEST + '123');
          expect(await login.labelWrongUserOrPasswordIsVisible()).toBeTruthy();
      });
  });

  test('Send email for contact', async({ page }) => {
    const home = new Home(page);
    const contact = new Contact(page);

    await test.step('Navigate To Contact Page', async() => {
        await home.navigateToContactUs();
    });

    await test.step('Fill Contact Form', async() => {
        await contact.fillName('Edwin Mantilla');
        await contact.fillEmail('hackpro3@yopmail.com');
        await contact.fillSubject('Example Test');
        await contact.fillMessage('Example Text Test');
    });

    await test.step('Upload File', async() => {
      await contact.uploadFile('helpers/ExampleTest.txt');
    });

    await test.step('Submit Form', async() => {
      await contact.submit();
      page.once('dialog', (dialog) => {
        console.log(dialog.message());
        dialog.accept();
      });
    });
  });
});
