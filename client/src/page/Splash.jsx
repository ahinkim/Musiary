import React from "react";
import styled from "styled-components";
import { color } from "../asset/palette";
import Text from "../component/Text";
import { content } from "../asset/Content";

const CenterText = styled(Text)`
  margin-bottom: 10px;
  color: white;
  font-weight: 100;
  position: absolute;
  top: 48vh;
  left: 35vw;
`;

const SplashWrapper = styled.div`
  position: absolute;
  top: -5vw;
  left: -5vh;
  width: 110vw;
  height: 110vh;
  background: linear-gradient(to bottom, ${color.PINK} 42%, ${color.BLUE});
`;
export default function Splash() {
  return (
    <SplashWrapper>
      <CenterText size={50}>{content.MUSIARY_LOGO}</CenterText>
    </SplashWrapper>
  );
}
