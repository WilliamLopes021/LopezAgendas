import type ScheduleSettings from "../entities/ScheduleSettings.js";
import type { UniqueEntityId } from "../value-objects/UniqueEntityId.js";

export interface ScheduleSettingsRepository {
  create(data: ScheduleSettings): Promise<void>;
  update(id: UniqueEntityId, data: Partial<ScheduleSettings>): Promise<void>;
  delete(id: UniqueEntityId): Promise<void>;
  findById(id: UniqueEntityId): Promise<ScheduleSettings | null>;
}
