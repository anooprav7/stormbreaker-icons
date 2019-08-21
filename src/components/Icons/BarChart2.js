import React from "react";
import { StyledSvg } from "../StyledSvg";
export function BarChart2(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-bar-chart-2"
      {...props}
    >
      <path d="M18 20V10M12 20V4M6 20v-6" />
    </StyledSvg>
  );
}
