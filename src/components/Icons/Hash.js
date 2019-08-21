import React from "react";
import { StyledSvg } from "../StyledSvg";
export function Hash(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-hash"
      {...props}
    >
      <path d="M4 9h16M4 15h16M10 3L8 21M16 3l-2 18" />
    </StyledSvg>
  );
}
