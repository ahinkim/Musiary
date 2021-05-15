import React from "react";
import styled from "styled-components";
import { color } from "../asset/palette";

const CardSongWrapper = styled.div`
  padding: 10px 4px 4px 4px;
  width: 100%;
  height: 82%;
  border-top: 1px solid ${color.LIGHT_GREY};
  border-bottom: 1px solid ${color.LIGHT_GREY};
`;
export default function CardSongWrapperfunction({ children }) {
  return <CardSongWrapper>{children}</CardSongWrapper>;
}
