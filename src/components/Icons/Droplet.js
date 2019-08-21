import React from "react";
import { StyledSvg } from "../StyledSvg";
export function Droplet(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-droplet"
      {...props}
    >
      <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
    </StyledSvg>
  );
}
