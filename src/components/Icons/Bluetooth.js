import React from "react";
import { StyledSvg } from "../StyledSvg";
export function Bluetooth(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-bluetooth"
      {...props}
    >
      <path d="M6.5 6.5l11 11L12 23V1l5.5 5.5-11 11" />
    </StyledSvg>
  );
}
