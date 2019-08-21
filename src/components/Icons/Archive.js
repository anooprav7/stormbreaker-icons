import React from "react";
import { StyledSvg } from "../StyledSvg";
export function Archive(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-archive"
      {...props}
    >
      <path d="M21 8v13H3V8M1 3h22v5H1zM10 12h4" />
    </StyledSvg>
  );
}
