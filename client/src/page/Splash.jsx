import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { color } from "../asset/palette";
import Text from "../component/Text";
import { content } from "../asset/Content";

const GlobalStyle = createGlobalStyle`
  body{
    background:${color.BLUE};
    background:linear-gradient(to bottom,${color.PINK} 42%,${color.BLUE});

  }
`;
const CenterText = styled(Text)`
  margin-bottom: 10px;
  color: white;
  font-weight: 100;
  position: absolute;
  top: 45vh;
  left: 23vw;
`;
export default function Splash() {
  return (
    <>
      <GlobalStyle />
      <CenterText size={50}>{content.MUSIARY_LOGO}</CenterText>
    </>
  );
}
