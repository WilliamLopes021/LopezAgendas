import type { AvailabilityProps } from "../props/Availability.props.js";

class Availability {
  private constructor(private props: AvailabilityProps) {}

  static create(props: AvailabilityProps): Availability {
    return new Availability(props);
  }
}

export default Availability;
