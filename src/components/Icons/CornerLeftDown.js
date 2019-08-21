import React from "react";
import { StyledSvg } from "../StyledSvg";
export function CornerLeftDown(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-corner-left-down"
      {...props}
    >
      <path d="M14 15l-5 5-5-5" />
      <path d="M20 4h-7a4 4 0 00-4 4v12" />
    </StyledSvg>
  );
}
