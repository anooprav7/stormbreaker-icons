import React from "react";
import { StyledSvg } from "../StyledSvg";
export function Tablet(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-tablet"
      {...props}
    >
      <rect
        x={4}
        y={2}
        width={16}
        height={20}
        rx={2}
        ry={2}
        transform="rotate(180 12 12)"
      />
      <path d="M12 18h0" />
    </StyledSvg>
  );
}
