import React from "react";
import { StyledSvg } from "../StyledSvg";
export function Power(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-power"
      {...props}
    >
      <path d="M18.36 6.64a9 9 0 11-12.73 0M12 2v10" />
    </StyledSvg>
  );
}
