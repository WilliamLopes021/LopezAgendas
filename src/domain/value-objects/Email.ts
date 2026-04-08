import { InvalidEmailError } from "../errors/InvalidEmailError.js";

export class Email {
  private constructor(private value: string) {}

  static create(input: string): Email {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (input.trim() === "") {
      throw new InvalidEmailError("O email não pode estar vazio.");
    }

    if (!emailRegex.test(input)) {
      throw new InvalidEmailError("O email deve conter um formato válido.");
    }

    return new Email(input);
  }

  getValue(): string {
    return this.value;
  }
}
