import React from "react";
import { StyledSvg } from "../StyledSvg";
export function ArrowDown(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-arrow-down"
      {...props}
    >
      <path d="M12 5v14M19 12l-7 7-7-7" />
    </StyledSvg>
  );
}
