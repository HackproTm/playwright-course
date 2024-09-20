export class ContactModel {
  private _name: string;
  private _email: string;
  private _subject: string;
  private _message: string;

  constructor(name: string, email: string, subject: string, message: string) {
    this._name = name;
    this._email = email;
    this._subject = subject;
    this._message = message;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }

  public set email(email: string) {
    this._email = email;
  }

  public get email(): string {
    return this._email;
  }

  public set subject(subject: string) {
    this._subject = subject;
  }

  public get subject(): string {
    return this._subject;
  }

  public set message(message: string) {
    this._message = message;
  }

  public get message(): string {
    return this._message;
  }
}
