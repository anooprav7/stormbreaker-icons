import React from "react";
import { StyledSvg } from "../StyledSvg";
export function MinusSquare(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-minus-square"
      {...props}
    >
      <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
      <path d="M8 12h8" />
    </StyledSvg>
  );
}
