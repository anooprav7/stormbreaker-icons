import React from "react";
import { StyledSvg } from "../StyledSvg";
export function Battery(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-battery"
      {...props}
    >
      <rect x={1} y={6} width={18} height={12} rx={2} ry={2} />
      <path d="M23 13v-2" />
    </StyledSvg>
  );
}
