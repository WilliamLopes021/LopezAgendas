import { InvalidNameError } from "../errors/Exceptions/InvalidNameError.ts";

export class Name {
  private constructor(private value: string) {}

  static create(input: string): Name {
    const isAlphaNumericRegex = /^[a-zA-Z\s]+$/;
    const trimmed = input.trim();

    if (trimmed === "" || trimmed.length < 3 || trimmed.length > 100) {
      throw new InvalidNameError("O nome deve ter entre 3 e 100 caracteres.");
    }

    if (!isAlphaNumericRegex.test(input)) {
      throw new InvalidNameError("O nome não pode conter números.");
    }

    if (input.includes(" ")) {
      const names = input.split(" ");
      const parsedNames = names.map((value) => value.trim());

      return new Name(parsedNames.join(" "));
    }

    return new Name(trimmed);
  }

  getValue(): string {
    return this.value;
  }
}
