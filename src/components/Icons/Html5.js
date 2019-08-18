import React from "react";
import StyledSvg from "../StyledSvg";

function Html5(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="#444"
        d="M4.665 3.411l2.063 23.176 9.258 2.574 9.284-2.578 2.065-23.172H4.664zm4.286 5.5l-.068-.763h7.107v2.842h-4.005l.259 2.911h3.746v2.842H9.649L8.951 8.91zm13.567 5.754l-.667 7.483-.043.48-5.822 1.616-5.814-1.616-.398-4.463h2.849l.202 2.267 3.163.854 3.165-.856.329-3.686h-3.485v-2.842h6.587l-.069.763zm.514-5.754l-.129 1.441-.057.639H16V8.149h7.1l-.068.762z"
      />
    </StyledSvg>
  );
}

export default Html5;
