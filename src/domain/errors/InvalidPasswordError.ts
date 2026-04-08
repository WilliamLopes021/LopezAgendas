export class InvalidPasswordError extends Error {
  constructor(public reason: string) {
    super(`Senha inválida: ${reason}`);
  }
}
