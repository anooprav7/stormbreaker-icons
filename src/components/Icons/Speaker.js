import React from "react";
import { StyledSvg } from "../StyledSvg";
export function Speaker(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-speaker"
      {...props}
    >
      <rect x={4} y={2} width={16} height={20} rx={2} ry={2} />
      <circle cx={12} cy={14} r={4} />
      <path d="M12 6h0" />
    </StyledSvg>
  );
}
