import type { ScheduleSettingsProps } from "../props/ScheduleSettings.props.js";

class ScheduleSettings {
  private constructor(private props: ScheduleSettingsProps) {}

  static create(props: ScheduleSettingsProps): ScheduleSettings {
    return new ScheduleSettings(props);
  }
}

export default ScheduleSettings;
