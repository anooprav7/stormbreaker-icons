import React from "react";
import { StyledSvg } from "../StyledSvg";
export function Chrome(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-chrome"
      {...props}
    >
      <circle cx={12} cy={12} r={10} />
      <circle cx={12} cy={12} r={4} />
      <path d="M21.17 8H12M3.95 6.06L8.54 14M10.88 21.94L15.46 14" />
    </StyledSvg>
  );
}
