import React from "react";
import { StyledSvg } from "../StyledSvg";
export function AlignCenter(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-align-center"
      {...props}
    >
      <path d="M18 10H6M21 6H3M21 14H3M18 18H6" />
    </StyledSvg>
  );
}
