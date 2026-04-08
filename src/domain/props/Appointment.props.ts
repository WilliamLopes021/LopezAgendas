import type { AppointmentStatus } from "../types/AppointmentStatus.js";
import type { UniqueEntityId } from "../value-objects/UniqueEntityId.js";

export interface AppointmentProps {
  id: UniqueEntityId;
  serviceProviderId: UniqueEntityId;
  service_id: UniqueEntityId;
  client_name: string; //"ENTIDADE CLIENTE"
  client_phone: string; //"ENTIDADE CLIENTE"
  start_time: number;
  end_time: number;
  status: AppointmentStatus;
  cancel_token: string; // CANCELAMENTO
  canceled_at: Date; // CANCELAMENTO
  created_at: Date;
  updated_at: Date;
}
