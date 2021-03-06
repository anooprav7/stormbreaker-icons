import React from "react";
import { StyledSvg } from "../StyledSvg";
export function ArrowDownLeft(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-arrow-down-left"
      {...props}
    >
      <path d="M17 7L7 17M17 17H7V7" />
    </StyledSvg>
  );
}
