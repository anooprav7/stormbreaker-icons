import React from "react";
import { StyledSvg } from "../StyledSvg";
export function AtSign(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-at-sign"
      {...props}
    >
      <circle cx={12} cy={12} r={4} />
      <path d="M16 8v5a3 3 0 006 0v-1a10 10 0 10-3.92 7.94" />
    </StyledSvg>
  );
}
