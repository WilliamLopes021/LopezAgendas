import type Availability from "../entities/schedule/Availability.ts";
import type { DayCronogram } from "../types/DayCronogram.ts";
import type { TimeOfDay } from "../value-objects/TimeOfDay.ts";
import createDate from "../helpers/createDate.ts";

class AppointmentService {
  // pegar os dias disponiveis/tempo
  // sobrepor com os blockedslots

  weeklyCronogram(availability: Availability[]): Map<number, DayCronogram[]> {
    const map = new Map<number, DayCronogram[]>();

    for (const dailyCronogram of availability) {
      const { dayOfWeek, startTime, endTime } = dailyCronogram;
      const value = map.get(dayOfWeek);

      if (map.has(dayOfWeek) && value) {
        value.push({ start: startTime, end: endTime });
        continue;
      }

      map.set(dayOfWeek, [{ start: startTime, end: endTime }]);
    }

    return map;
  }

  normalizeWeeklyCronogram(
    minBookingHours: TimeOfDay,
    maxBookingDays: number,
    weeklyCronogram: Map<number, DayCronogram[]>,
    now: Date,
  ) {
    const hour = minBookingHours.getHour();
    const minutes = minBookingHours.getMinutes();

    const minDate = new Date(now.getTime() + hour * (minutes || 60) * 60 * 1000);
    const maxDate = new Date(now.getTime() + maxBookingDays * 24 * 60 * 60 * 1000);
    const slots: { weekDay: number; start: Date; end: Date }[] = [];

    while (minDate < maxDate) {
      const currentDay = minDate.getDay();
      const value = weeklyCronogram.get(currentDay);

      if (value) {
        value.forEach(({ start, end }) => {
          const interval = {
            weekDay: currentDay,
            start: createDate(
              minDate.getFullYear(),
              minDate.getMonth(),
              minDate.getDate(),
              start,
            ),
            end: createDate(
              minDate.getFullYear(),
              minDate.getMonth(),
              minDate.getDate(),
              end,
            ),
          };
          slots.push(interval);
        });
      }

      minDate.setDate(minDate.getDate() + 1);
    }
  }

  // duracao do serviço, buffer do serviço
  // validar com as configs de agenda
}

export default AppointmentService;
