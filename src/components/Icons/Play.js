import React from "react";
import { StyledSvg } from "../StyledSvg";
export function Play(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-play"
      {...props}
    >
      <path d="M5 3l14 9-14 9V3z" />
    </StyledSvg>
  );
}
