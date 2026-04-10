export class UniqueEntityId {
  private constructor(private value: string) {}

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
