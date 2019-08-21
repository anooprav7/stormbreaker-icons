import React from "react";
import { StyledSvg } from "../StyledSvg";
export function CornerRightDown(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-corner-right-down"
      {...props}
    >
      <path d="M10 15l5 5 5-5" />
      <path d="M4 4h7a4 4 0 014 4v12" />
    </StyledSvg>
  );
}
