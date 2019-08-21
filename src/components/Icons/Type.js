import React from "react";
import { StyledSvg } from "../StyledSvg";
export function Type(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-type"
      {...props}
    >
      <path d="M4 7V4h16v3M9 20h6M12 4v16" />
    </StyledSvg>
  );
}
