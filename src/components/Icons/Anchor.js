import React from "react";
import { StyledSvg } from "../StyledSvg";
export function Anchor(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-anchor"
      {...props}
    >
      <circle cx={12} cy={5} r={3} />
      <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
    </StyledSvg>
  );
}
