import React from "react";
import styled from "styled-components";
import Icon from "../asset/Icon";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 7vh;
  padding: 15px 18px;
  background-color: transparent;
  text-align: center;
`;

const HeaderText = styled.h1`
  vertical-align: center;
`;

function Header({ children, leftIconType, rightIconType, leftOnClick, rightOnClick }) {
  return (
    <HeaderWrapper>
      <Icon type={leftIconType} onClick={leftOnClick} />
      <HeaderText>{children}</HeaderText>
      <Icon type={rightIconType} onClick={rightOnClick} />
    </HeaderWrapper>
  );
}

export default Header;
