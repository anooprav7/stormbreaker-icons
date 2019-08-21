import React from "react";
import { StyledSvg } from "../StyledSvg";
export function FastForward(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-fast-forward"
      {...props}
    >
      <path d="M13 19l9-7-9-7v14zM2 19l9-7-9-7v14z" />
    </StyledSvg>
  );
}
