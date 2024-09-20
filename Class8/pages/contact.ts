import { Locator, Page } from '@playwright/test';
import { ContactModel } from '../models/contact';

export class Contact {
  readonly page: Page;
  readonly lblContact: Locator;
  readonly txtName: Locator;
  readonly txtEmail: Locator;
  readonly txtSubject: Locator;
  readonly txtMessage: Locator;
  readonly btnSelectFile: Locator;
  readonly btnSubmit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.lblContact = page.getByText('CONTACT US');
    this.txtName = page.getByRole('textbox', { name: 'Name'});
    this.txtEmail = page.locator('[data-qa="email"]');
    this.txtSubject = page.locator('[data-qa="subject"]');
    this.txtMessage = page.locator('#message');
    this.btnSelectFile = page.locator('input[name="upload_file"]');
    this.btnSubmit = page.getByText('Submit');
  }

  async fillName(name: string) {
    await this.txtName.fill(name);
  }

  async fillEmail(email: string) {
    await this.txtEmail.fill(email);
  }

  async fillSubject(subject: string) {
    await this.txtSubject.fill(subject);
  }

  async fillMessage(message: string) {
    await this.txtMessage.fill(message);
  }

  async uploadFile(filePath: string) {
    await this.btnSelectFile.click();
    await this.btnSelectFile.setInputFiles(filePath);
  }

  async submit() {
    await this.btnSubmit.click();
  }

  async fillContactForm(contact: ContactModel) {
    await this.txtName.fill(contact.name);
    await this.txtEmail.fill(contact.email);
    await this.txtSubject.fill(contact.subject);
    await this.txtMessage.fill(contact.message);
    await this.submit();
  }
}
