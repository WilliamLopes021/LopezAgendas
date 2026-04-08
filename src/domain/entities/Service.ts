import type { ServiceProps } from "../props/Service.props.js";

class Service {
  private constructor(private props: ServiceProps) {}

  static create(props: ServiceProps): Service {
    return new Service(props);
  }
}

export default Service;
