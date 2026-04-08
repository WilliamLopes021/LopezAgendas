import type Appointment from "../entities/Appointment.js";
import type { UniqueEntityId } from "../value-objects/UniqueEntityId.js";

export interface AppointmentRepository {
  create(data: Appointment): Promise<void>;
  update(id: UniqueEntityId, data: Partial<Appointment>): Promise<void>;
  delete(id: UniqueEntityId): Promise<void>;
  findById(id: UniqueEntityId): Promise<Appointment | null>;
}
