export class InvalidUniqueEntityIdError extends Error {
  constructor() {
    super(`ID inválido.`);
  }
}
