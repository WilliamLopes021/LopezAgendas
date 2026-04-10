import { InvalidTimeError } from "../errors/Exceptions/InvalidTimeError.ts";

export class TimeOfDay {
  private constructor(
    private hour: number,
    private minutes?: number,
  ) {}

  static create(hour: number, minutes?: number): TimeOfDay {
    if (hour < 0 || hour > 23) {
      throw new InvalidTimeError("Invalid hour");
    }
    if (minutes && (minutes < 0 || minutes > 59)) {
      throw new InvalidTimeError("Invalid minutes");
    }
    return new TimeOfDay(hour, minutes);
  }

  getValueString(): string {
    return `${this.hour}:${this.minutes}`;
  }

  getHour(): number {
    return this.hour;
  }

  getMinutes(): number | undefined {
    return this.minutes;
  }
}
