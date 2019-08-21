import React from "react";
import { StyledSvg } from "../StyledSvg";
export function Volume(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-volume"
      {...props}
    >
      <path d="M11 5L6 9H2v6h4l5 4V5z" />
    </StyledSvg>
  );
}
