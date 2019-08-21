import React from "react";
import { StyledSvg } from "../StyledSvg";
export function CornerRightUp(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-corner-right-up"
      {...props}
    >
      <path d="M10 9l5-5 5 5" />
      <path d="M4 20h7a4 4 0 004-4V4" />
    </StyledSvg>
  );
}
