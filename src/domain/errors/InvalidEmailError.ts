export class InvalidEmailError extends Error {
  constructor(public reason: string) {
    super(`Email inválido: ${reason}`);
  }
}