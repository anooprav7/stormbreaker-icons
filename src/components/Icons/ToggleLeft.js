import React from "react";
import { StyledSvg } from "../StyledSvg";
export function ToggleLeft(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-toggle-left"
      {...props}
    >
      <rect x={1} y={5} width={22} height={14} rx={7} ry={7} />
      <circle cx={8} cy={12} r={3} />
    </StyledSvg>
  );
}
