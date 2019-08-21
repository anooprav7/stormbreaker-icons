import React from "react";
import { StyledSvg } from "../StyledSvg";
export function ArrowLeft(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-arrow-left"
      {...props}
    >
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </StyledSvg>
  );
}
