import type RefreshToken from "../entities/RefreshToken.js";
import type { UniqueEntityId } from "../value-objects/UniqueEntityId.js";

export interface RefreshTokenRepository {
  create(data: RefreshToken): Promise<void>;
  update(id: UniqueEntityId, data: Partial<RefreshToken>): Promise<void>;
  delete(id: UniqueEntityId): Promise<void>;
  findById(id: UniqueEntityId): Promise<RefreshToken | null>;
  findByServiceProviderId(id: UniqueEntityId): Promise<RefreshToken | null>;
  findByToken(hashedtoken: string): Promise<RefreshToken | null>;
}
