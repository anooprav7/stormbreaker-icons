import React from "react";
import { StyledSvg } from "../StyledSvg";
export function BarChart(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-bar-chart"
      {...props}
    >
      <path d="M12 20V10M18 20V4M6 20v-4" />
    </StyledSvg>
  );
}
