import React from "react";
import { StyledSvg } from "../StyledSvg";
export function CloudLightning(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-cloud-lightning"
      {...props}
    >
      <path d="M19 16.9A5 5 0 0018 7h-1.26a8 8 0 10-11.62 9" />
      <path d="M13 11l-4 6h6l-4 6" />
    </StyledSvg>
  );
}
