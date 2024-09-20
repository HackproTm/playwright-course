export class UserModel {
  private _title: boolean;
  private _name: string;
  private _email: string;
  private _password: string;
  private _dayBirth: number;
  private _monthBirth: string;
  private _yearBirth: number;
  private _newsLetter: boolean;
  private _offers: boolean;
  private _firstName: string;
  private _lastName: string;
  private _company: string;
  private _address1: string;
  private _address2: string;
  private _country: string;
  private _state: string;
  private _city: string;
  private _zipCode: number;
  private _mobileNumber: string;

  constructor(email: string, password: string) {
    this._email = email;
    this._password = password;
  }

  public set title(title: boolean) {
    this._title = title;
  }

  public get title(): boolean {
    return this._title;
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

  public set password(password: string) {
    this._password = password;
  }

  public get password(): string {
    return this._password;
  }

  public set dayBirth(day: number) {
    this._dayBirth = day;
  }

  public get dayBirth(): number {
    return this._dayBirth;
  }

  public set monthBirth(month: string) {
    this._monthBirth = month;
  }

  public get monthBirth(): string {
    return this._monthBirth;
  }

  public set yearBirth(year: number) {
    this._yearBirth = year;
  }

  public get yearBirth(): number {
    return this._yearBirth;
  }

  public set newsLetter(newsLetter: boolean) {
    this._newsLetter = newsLetter;
  }

  public get newsLetter(): boolean {
    return this._newsLetter;
  }

  public set offers(offers: boolean) {
    this._offers = offers;
  }

  public get offers(): boolean {
    return this._offers;
  }

  public set firstName(firstName: string) {
    this._firstName = firstName;
  }

  public get firstName(): string {
    return this._firstName;
  }

  public set lastName(lastName: string) {
    this._lastName = lastName;
  }

  public get lastName(): string {
    return this._lastName;
  }

  public set company(company: string) {
    this._company = company;
  }

  public get company(): string {
    return this._company;
  }

  public set address1(address1: string) {
    this._address1 = address1;
  }

  public get address1(): string {
    return this._address1;
  }

  public set address2(address2: string) {
    this._address2 = address2;
  }

  public get address2(): string {
    return this._address2;
  }

  public set country(country: string) {
    this._country = country;
  }

  public get country(): string {
    return this._country;
  }

  public set state(state: string) {
    this._state = state;
  }

  public get state(): string {
    return this._state;
  }

  public set city(city: string) {
    this._city = city;
  }

  public get city(): string {
    return this._city;
  }

  public set zipCode(zipCode: number) {
    this._zipCode = zipCode;
  }

  public get zipCode(): number {
    return this._zipCode;
  }

  public set mobileNumber(mobileNumber: string) {
    this._mobileNumber = mobileNumber;
  }

  public get mobileNumber(): string {
    return this._mobileNumber;
  }
}
