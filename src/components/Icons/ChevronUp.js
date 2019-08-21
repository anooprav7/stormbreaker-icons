import React from "react";
import { StyledSvg } from "../StyledSvg";
export function ChevronUp(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-chevron-up"
      {...props}
    >
      <path d="M18 15l-6-6-6 6" />
    </StyledSvg>
  );
}
