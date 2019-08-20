import React from "react";
import { StyledSvg } from "../StyledSvg";
export function BingSmall(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="#444"
        d="M13.706 10.918l2.269 4.919 3.352 1.516-12.092 6.361 4.954-4.416V6.707L7.087 5.144V23.87l5.071 3.555 12.754-7.597v-5.476z"
      />
    </StyledSvg>
  );
}
