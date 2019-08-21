import React from "react";
import { StyledSvg } from "../StyledSvg";
export function Percent(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-percent"
      {...props}
    >
      <path d="M19 5L5 19" />
      <circle cx={6.5} cy={6.5} r={2.5} />
      <circle cx={17.5} cy={17.5} r={2.5} />
    </StyledSvg>
  );
}
