import React from "react";
import { StyledSvg } from "../StyledSvg";
export function Activity(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-activity"
      {...props}
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </StyledSvg>
  );
}
