import React from "react";
import { StyledSvg } from "../StyledSvg";
export function Cpu(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-cpu"
      {...props}
    >
      <rect x={4} y={4} width={16} height={16} rx={2} ry={2} />
      <path d="M9 9h6v6H9zM9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
    </StyledSvg>
  );
}
