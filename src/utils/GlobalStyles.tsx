import React from "react";
import { Global, css } from "@emotion/react";
import tw, { GlobalStyles as BaseStyles } from "twin.macro";

const customStyles = css`
  html {
    height: 100%;
    font-family: Inter, "system-ui";
  }

  @supports (font-variation-settings: normal) {
    html {
      font-family: Inter, "system-ui";
    }
  }
`;

const GlobalStyles = () => {
  return (
    <>
      <BaseStyles />
      <Global styles={customStyles} />
    </>
  );
};

export default GlobalStyles;
