import React from "react";
import { StyledSvg } from "../StyledSvg";
export function Italic(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-italic"
      {...props}
    >
      <path d="M19 4h-9M14 20H5M15 4L9 20" />
    </StyledSvg>
  );
}
