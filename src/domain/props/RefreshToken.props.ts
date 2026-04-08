import type { Email } from "../value-objects/Email.js";
import type { UniqueEntityId } from "../value-objects/UniqueEntityId.js";

export interface RefreshTokenProps {
  id: UniqueEntityId;
  serviceProviderId: UniqueEntityId;
  serviceProviderEmail: Email;
  hashedToken: string;
  status: string;
  expiresAt: Date;
  createdAt: Date;
}
