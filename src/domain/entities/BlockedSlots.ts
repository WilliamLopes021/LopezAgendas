import type { BlockedSlotsProps } from "../props/BlockedSlots.props.js";

class BlockedSlots {
  private constructor(private props: BlockedSlotsProps) {}

  static create(props: BlockedSlotsProps): BlockedSlots {
    return new BlockedSlots(props);
  }
}

export default BlockedSlots;
