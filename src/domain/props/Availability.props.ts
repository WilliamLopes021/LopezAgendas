import type { UniqueEntityId } from "../value-objects/UniqueEntityId.js";

export interface AvailabilityProps {
  id: UniqueEntityId;
  service_provider_id: UniqueEntityId;
  day_of_week: number;
  start_time: number;
  end_time: number;
}
