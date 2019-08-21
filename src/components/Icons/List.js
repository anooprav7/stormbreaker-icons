import React from "react";
import { StyledSvg } from "../StyledSvg";
export function List(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-list"
      {...props}
    >
      <path d="M8 6h13M8 12h13M8 18h13M3 6h0M3 12h0M3 18h0" />
    </StyledSvg>
  );
}
