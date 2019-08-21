import React from "react";
import { StyledSvg } from "../StyledSvg";
export function CornerLeftUp(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-corner-left-up"
      {...props}
    >
      <path d="M14 9L9 4 4 9" />
      <path d="M20 20h-7a4 4 0 01-4-4V4" />
    </StyledSvg>
  );
}
