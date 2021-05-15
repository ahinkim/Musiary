import React from "react";
import styled from "styled-components";
import { color } from "../asset/palette";

const CardView = styled.div`
  padding: 8px 8px;
  border: 1px solid ${color.LIGHT_GREY};
  box-shadow: 3px 3px 3px ${color.LIGHT_GREY};
  border-radius: 10px;
  width: 90vw;
  height: 40vh;
  margin-top: 10px;
  margin-bottom: 30px;
`;

export default function CardViewfunction({ children }) {
  return <CardView>{children}</CardView>;
}
