import type { InvalidEmailError } from "../errors/InvalidEmailError.js";
import type { InvalidNameError } from "../errors/InvalidNameError.js";
import type { InvalidPasswordError } from "../errors/InvalidPasswordError.js";

export type DomainError =
  | InvalidEmailError
  | InvalidNameError
  | InvalidPasswordError;
