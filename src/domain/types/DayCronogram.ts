import type { TimeOfDay } from "../value-objects/TimeOfDay.ts";

export type DayCronogram = {
  start: TimeOfDay;
  end: TimeOfDay;
};
