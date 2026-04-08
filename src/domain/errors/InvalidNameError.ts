export class InvalidNameError extends Error {
  constructor(public reason: string) {
    super(`Nome inválido: ${reason}`);
  }
}