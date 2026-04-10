import type { InvalidEmailError } from "../errors/Exceptions/InvalidEmailError.ts";
import type { InvalidNameError } from "../errors/Exceptions/InvalidNameError.ts";
import type { InvalidPasswordError } from "../errors/Exceptions/InvalidPasswordError.ts";

export type DomainError =
  | InvalidEmailError
  | InvalidNameError
  | InvalidPasswordError;
