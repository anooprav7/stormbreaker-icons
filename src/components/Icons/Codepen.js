import React from "react";
import { StyledSvg } from "../StyledSvg";
export function Codepen(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-codepen"
      {...props}
    >
      <path d="M12 2l10 6.5v7L12 22 2 15.5v-7L12 2zM12 22v-6.5" />
      <path d="M22 8.5l-10 7-10-7" />
      <path d="M2 15.5l10-7 10 7M12 2v6.5" />
    </StyledSvg>
  );
}
