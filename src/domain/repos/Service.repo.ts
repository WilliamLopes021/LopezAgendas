import type Service from "../entities/Service.js";
import type { UniqueEntityId } from "../value-objects/UniqueEntityId.js";

export interface ServiceRepository {
  create(data: Service): Promise<void>;
  update(id: UniqueEntityId, data: Partial<Service>): Promise<void>;
  delete(id: UniqueEntityId): Promise<void>;
  findById(id: UniqueEntityId): Promise<Service | null>;
}
