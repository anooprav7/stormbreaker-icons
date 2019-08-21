import React from "react";
import { StyledSvg } from "../StyledSvg";
export function ArrowUpCircle(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-arrow-up-circle"
      {...props}
    >
      <circle cx={12} cy={12} r={10} />
      <path d="M16 12l-4-4-4 4M12 16V8" />
    </StyledSvg>
  );
}
