import React from "react";
import styled from "styled-components";

const CardTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  text-align: center;
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 5px;
`;

export default function CardTitleWrapperfunction({ children }) {
  return <CardTitleWrapper>{children}</CardTitleWrapper>;
}
