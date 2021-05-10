import React from "react";
import styled from "styled-components";
import { color } from "../asset/palette";
import Text from "./Text";

const ButtonWrapper = styled.button`
  width: 100%;
  height: 48px;
  background-color: ${color.BLUE};
  outline: none;
  border: none;
  border-radius: 7px;
`;

export default function Button({ children }) {
  return (
    <ButtonWrapper>
      <Text size={16} color={color.WHITE}>
        {children}
      </Text>
    </ButtonWrapper>
  );
}
