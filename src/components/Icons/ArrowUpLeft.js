import React from "react";
import { StyledSvg } from "../StyledSvg";
export function ArrowUpLeft(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-arrow-up-left"
      {...props}
    >
      <path d="M17 17L7 7M7 17V7h10" />
    </StyledSvg>
  );
}
