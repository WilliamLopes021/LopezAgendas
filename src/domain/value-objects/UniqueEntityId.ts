export class UniqueEntityId {
  private constructor(private value: string) {}

  static create(input: string): UniqueEntityId {
    if (input.trim() === "") {
      throw new Error("invalid input value.");
    }

    return new UniqueEntityId(input);
  }

  static generate(): UniqueEntityId {
    return new UniqueEntityId(crypto.randomUUID());
  }

  equals(otherId: UniqueEntityId): boolean {
    return this.value === otherId.value;
  }

  getValue(): string {
    return this.value;
  }
}
