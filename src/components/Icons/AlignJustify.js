import React from "react";
import { StyledSvg } from "../StyledSvg";
export function AlignJustify(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-align-justify"
      {...props}
    >
      <path d="M21 10H3M21 6H3M21 14H3M21 18H3" />
    </StyledSvg>
  );
}
