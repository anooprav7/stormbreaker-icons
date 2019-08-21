import React from "react";
import { StyledSvg } from "../StyledSvg";
export function CreditCard(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-credit-card"
      {...props}
    >
      <rect x={1} y={4} width={22} height={16} rx={2} ry={2} />
      <path d="M1 10h22" />
    </StyledSvg>
  );
}
