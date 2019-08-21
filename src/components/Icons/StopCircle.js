import React from "react";
import { StyledSvg } from "../StyledSvg";
export function StopCircle(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-stop-circle"
      {...props}
    >
      <circle cx={12} cy={12} r={10} />
      <path d="M9 9h6v6H9z" />
    </StyledSvg>
  );
}
