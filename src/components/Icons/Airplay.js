import React from "react";
import { StyledSvg } from "../StyledSvg";
export function Airplay(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-airplay"
      {...props}
    >
      <path d="M5 17H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-1" />
      <path d="M12 15l5 6H7l5-6z" />
    </StyledSvg>
  );
}
