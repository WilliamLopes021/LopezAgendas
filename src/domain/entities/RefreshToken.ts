import type { RefreshTokenProps } from "../props/RefreshToken.props.js";

class RefreshToken {
  private constructor(private props: RefreshTokenProps) {}

  static create(props: RefreshTokenProps): RefreshToken {
    return new RefreshToken(props);
  }
}

export default RefreshToken;
