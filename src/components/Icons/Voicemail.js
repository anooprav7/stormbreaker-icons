import React from "react";
import { StyledSvg } from "../StyledSvg";
export function Voicemail(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-voicemail"
      {...props}
    >
      <circle cx={5.5} cy={11.5} r={4.5} />
      <circle cx={18.5} cy={11.5} r={4.5} />
      <path d="M5.5 16h13" />
    </StyledSvg>
  );
}
