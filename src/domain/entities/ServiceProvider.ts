import type { ServiceProviderProps } from "../props/ServiceProvider.props.js";
import { UniqueEntityId } from "../value-objects/UniqueEntityId.js";

class ServiceProvider {
  private constructor(private props: ServiceProviderProps) {}

  static create(props: Omit<ServiceProviderProps, "id" | "createdAt" | "updatedAt">) {
    return new ServiceProvider({
      id: UniqueEntityId.generate(),
      name: props.name,
      email: props.email,
      password: props.password,
      serviceType: props.serviceType,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  changeName(name: string) {}

  get id() {
    return this.props.id;
  }

  get name() {
    return this.props.name;
  }

  get email() {
    return this.props.email;
  }

  get password() {
    return this.props.password;
  }

  get serviceType() {
    return this.props.serviceType;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }
}

export default ServiceProvider;
