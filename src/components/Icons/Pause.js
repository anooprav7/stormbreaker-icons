import React from "react";
import { StyledSvg } from "../StyledSvg";
export function Pause(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-pause"
      {...props}
    >
      <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
    </StyledSvg>
  );
}
