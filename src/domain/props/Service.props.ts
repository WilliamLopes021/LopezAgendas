import type { UniqueEntityId } from "../value-objects/UniqueEntityId.js";

export interface ServiceProps {
  id: UniqueEntityId;
  service_provider_id: UniqueEntityId;
  name: string;
  price: number;
  description: string;
  duration_minutes: number;
  buffer_time_minutes: number; // substitui interval_time
  is_active: boolean;
}
