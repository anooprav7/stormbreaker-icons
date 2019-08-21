import React from "react";
import { StyledSvg } from "../StyledSvg";
export function ChevronsLeft(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-chevrons-left"
      {...props}
    >
      <path d="M11 17l-5-5 5-5M18 17l-5-5 5-5" />
    </StyledSvg>
  );
}
