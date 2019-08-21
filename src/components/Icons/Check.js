import React from "react";
import { StyledSvg } from "../StyledSvg";
export function Check(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-check"
      {...props}
    >
      <path d="M20 6L9 17l-5-5" />
    </StyledSvg>
  );
}
