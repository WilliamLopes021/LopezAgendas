import type { Email } from "../value-objects/Email.js";
import type { Password } from "../value-objects/Password.js";
import type { UniqueEntityId } from "../value-objects/UniqueEntityId.js";

export interface ServiceProviderProps {
  id: UniqueEntityId;
  name: string;
  email: Email;
  password: Password;
  serviceType: string; 
  createdAt: Date;
  updatedAt: Date;
}