import React from "react";
import { StyledSvg } from "../StyledSvg";
export function ArrowUpRight(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-arrow-up-right"
      {...props}
    >
      <path d="M7 17L17 7M7 7h10v10" />
    </StyledSvg>
  );
}
