import type BlockedSlots from "../entities/BlockedSlots.js";
import type { UniqueEntityId } from "../value-objects/UniqueEntityId.js";

export interface BlockedSlotsRepository {
  create(data: BlockedSlots): Promise<void>;
  update(id: UniqueEntityId, data: Partial<BlockedSlots>): Promise<void>;
  delete(id: UniqueEntityId): Promise<void>;
  findById(id: UniqueEntityId): Promise<BlockedSlots | null>;
}
