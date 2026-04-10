import { InvalidPasswordError } from "../errors/Exceptions/InvalidPasswordError.ts";

export class Password {
  private constructor(private value: string) {}

  static create(input: string): Password {
    const trimmed = input.trim();
    const hasUpperCaseRegex = /[A-Z]/;
    const hasLowerCaseRegex = /[a-z]/;
    const hasNumberRegex = /[0-9]/;
    const hasSpecialCharacterRegex = /[^A-Za-z0-9]/;

    if (trimmed === "") {
      throw new InvalidPasswordError("Senha não pode ser um campo vazio.");
    }

    if (trimmed.length < 8) {
      throw new InvalidPasswordError("Senha deve ter pelo menos 8 caracteres.");
    }

    if (trimmed.length > 32) {
      throw new InvalidPasswordError("Senha deve ter no máximo 32 caracteres.");
    }

    if (!hasUpperCaseRegex.test(trimmed)) {
      throw new InvalidPasswordError(
        "Senha deve conter pelo menos uma letra maiúscula.",
      );
    }

    if (!hasLowerCaseRegex.test(trimmed)) {
      throw new InvalidPasswordError(
        "Senha deve conter pelo menos uma letra minúscula.",
      );
    }

    if (!hasNumberRegex.test(trimmed)) {
      throw new InvalidPasswordError("Senha deve conter pelo menos um número.");
    }

    if (!hasSpecialCharacterRegex.test(trimmed)) {
      throw new InvalidPasswordError(
        "Senha deve conter pelo menos um caractere especial.",
      );
    }

    return new Password(trimmed);
  }

  getValue(): string {
    return this.value;
  }
}
