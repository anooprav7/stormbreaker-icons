import React from "react";
import { StyledSvg } from "../StyledSvg";
export function Truck(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-truck"
      {...props}
    >
      <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" />
      <circle cx={5.5} cy={18.5} r={2.5} />
      <circle cx={18.5} cy={18.5} r={2.5} />
    </StyledSvg>
  );
}
