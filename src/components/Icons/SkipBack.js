import React from "react";
import { StyledSvg } from "../StyledSvg";
export function SkipBack(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-skip-back"
      {...props}
    >
      <path d="M19 20L9 12l10-8v16zM5 19V5" />
    </StyledSvg>
  );
}
