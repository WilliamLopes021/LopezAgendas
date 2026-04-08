import type { UniqueEntityId } from "../value-objects/UniqueEntityId.js";

export interface ScheduleSettingsProps {
  id: UniqueEntityId;
  service_provider_id: UniqueEntityId;
  min_advance_booking_hours: number;
  max_advance_booking_days: number;
  allow_overlapping: boolean; // marcações no mesmo horário
  default_buffer_time_minutes: number; // fallback
  timezone: string; // Verificar tipo
  created_at: Date;
  updated_at: Date;
}
