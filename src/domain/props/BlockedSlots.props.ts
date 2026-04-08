import type { UniqueEntityId } from "../value-objects/UniqueEntityId.js";

export interface BlockedSlotsProps {
  id: UniqueEntityId;
  service_provider_id: UniqueEntityId;
  start_time: Date;
  end_time: Date;
  reason: string;
}
