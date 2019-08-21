import React from "react";
import { StyledSvg } from "../StyledSvg";
export function AlignLeft(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-align-left"
      {...props}
    >
      <path d="M17 10H3M21 6H3M21 14H3M17 18H3" />
    </StyledSvg>
  );
}
