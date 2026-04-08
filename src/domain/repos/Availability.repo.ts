import type Availability from "../entities/Availability.js";
import type { UniqueEntityId } from "../value-objects/UniqueEntityId.js";

export interface AvailabilityRepository {
  create(data: Availability): Promise<void>;
  update(id: UniqueEntityId, data: Partial<Availability>): Promise<void>;
  delete(id: UniqueEntityId): Promise<void>;
  findById(id: UniqueEntityId): Promise<Availability | null>;
}
