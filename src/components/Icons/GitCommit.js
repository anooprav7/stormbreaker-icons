import React from "react";
import { StyledSvg } from "../StyledSvg";
export function GitCommit(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-git-commit"
      {...props}
    >
      <circle cx={12} cy={12} r={4} />
      <path d="M1.05 12H7M17.01 12h5.95" />
    </StyledSvg>
  );
}
