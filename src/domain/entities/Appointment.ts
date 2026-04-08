import type { AppointmentProps } from "../props/Appointment.props.js";

class Appointment {
  private constructor(private props: AppointmentProps) {}

  static create(props: AppointmentProps): Appointment {
    return new Appointment(props);
  }
}

export default Appointment;
