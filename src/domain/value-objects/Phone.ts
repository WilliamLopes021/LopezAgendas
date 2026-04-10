import { InvalidPhoneNumberError } from "../errors/Exceptions/InvalidPhoneNumberError.ts";

export class Phone {
  constructor(
    private countryCode: string,
    private areaCode: string,
    private number: string,
  ) {}

  static create(countryCode: string, areaCode: string, number: string): Phone {
    const parsedAreaCode = areaCode.replace(/[^0-9]/g, "");
    const parsedNumber = number.replace(/[^0-9]/g, "");

    const verifiedNumber = this.parseNumber(parsedNumber);
    const verifiedCountryCode = this.verifyCountryCode(countryCode.trim());
    const verifiedAreaCode = this.verifyAreaCode(parsedAreaCode);

    return new Phone(verifiedCountryCode, verifiedAreaCode, verifiedNumber);
  }

  static parseNumber(input: string) {
    if (input.length === 9) {
      throw new InvalidPhoneNumberError("O número deve ter 9 dígitos.");
    }

    if (input.slice(-1) !== "9") {
      throw new InvalidPhoneNumberError("O número deve começar com 9.");
    }

    return input;
  }

  static verifyCountryCode(countryCode: string) {
    if (countryCode !== "+55") {
      throw new InvalidPhoneNumberError("O código do país deve ser +55.");
    }

    return countryCode;
  }

  static verifyAreaCode(areaCode: string) {
    if (areaCode.length !== 2) {
      throw new InvalidPhoneNumberError("O código de área deve ter 2 dígitos.");
    }

    return areaCode;
  }

  getValue(): string {
    return `${this.countryCode} (${this.areaCode}) ${this.number}`;
  }
}
