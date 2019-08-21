import React from "react";
import { StyledSvg } from "../StyledSvg";
export function ArrowDownRight(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-arrow-down-right"
      {...props}
    >
      <path d="M7 7l10 10M17 7v10H7" />
    </StyledSvg>
  );
}
