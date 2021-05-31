import React from "react";
import styled from "styled-components";
import Icon from "../asset/Icon";
import { color } from "../asset/palette";
import Text from "../component/Text";
import { createGlobalStyle } from "styled-components";
import { content } from "../asset/Content";
import useSWR from "swr";
import ApiRequest from "../util/ApiRequest";

const GlobalStyle = createGlobalStyle`
  body{
    background-color:${color.BLUE};
  }
`;

const Grid = styled.div`
  padding: 0 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CenterWrapper = styled.div`
  position: absolute;
  top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CenterText = styled(Text)`
  margin-bottom: 10px;
  color: white;
`;

const MusiaryBox = styled.div`
  border-radius: 0px 10px 10px 0px;
  position: absolute;
  top: 80px;
  width: 70px;
  height: 80px;
  margin-top: 30px;
  background-color: white;
`;
const MusiaryText = styled(Text)`
  position: absolute;
  top: 23px;
  left: 23px;
  font-weight: 900;
`;
const MusiaryCircle = styled.div`
  border-radius: 50%;
  width: 7px;
  height: 7px;
  margin-left: 7px;
  margin-top: 11px;
  background-color: ${color.BLUE};
`;

const ButtonWrapper = styled.a`
  width: 70%;
  height: 45px;
  background-color: #fef01b;
  outline: none;
  border: none;
  position: absolute;
  display: flex;
  bottom: 80px;
  padding-top: 8px;
  padding-left: 15px;
  text-decoration: none;
  color: black;
`;
const ButtonVerticleBar = styled.div`
  width: 1px;
  height: 28px;
  margin-left: 12px;
  background-color: ${color.LIGHT_GREY};
`;
const ButtonTextWrapper = styled.div`
  width: 100%;
  margin-left: 20px;
  padding-top: 7px;
`;

export default function Login() {
  return (
    <>
      <GlobalStyle />
      <Grid>
        <CenterWrapper>
          <CenterText size={30}>{content.HELLO}</CenterText>
          <CenterText size={30}>{content.MUSIARY}</CenterText>
          <MusiaryBox>
            <MusiaryCircle />
            <MusiaryCircle />
            <MusiaryCircle />
            <MusiaryCircle />
            <MusiaryText size={37} color={color.BLUE}>
              {content.M}
            </MusiaryText>
          </MusiaryBox>
        </CenterWrapper>

        <ButtonWrapper href="http://localhost:8000/api/auth/kakao">
          <Icon size={27} type="CHAT_FILL" />
          <ButtonVerticleBar />
          <ButtonTextWrapper>
            <Text size={15} bold={true}>
              {content.KAKAO_LOGIN}
            </Text>
          </ButtonTextWrapper>
        </ButtonWrapper>
      </Grid>
    </>
  );
}
