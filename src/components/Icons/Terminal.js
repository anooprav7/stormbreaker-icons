import React from "react";
import { StyledSvg } from "../StyledSvg";
export function Terminal(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-terminal"
      {...props}
    >
      <path d="M4 17l6-6-6-6M12 19h8" />
    </StyledSvg>
  );
}
