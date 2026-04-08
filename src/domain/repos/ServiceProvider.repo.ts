import type ServiceProvider from "../entities/ServiceProvider.js";
import type { UniqueEntityId } from "../value-objects/UniqueEntityId.js";

export interface ServiceProviderRepository {
  create(data: ServiceProvider): Promise<void>;
  update(id: UniqueEntityId, data: Partial<ServiceProvider>): Promise<void>;
  delete(id: UniqueEntityId): Promise<void>;
  findById(id: UniqueEntityId): Promise<ServiceProvider | null>;
}
