import React from "react";
import styled from "styled-components";
import { fontWeight } from "../asset/size";
import CSSUnit from "../util/CSSUnit";

const StyledText = styled.span`
  display: block;
  font-size: ${(props) => CSSUnit.px(props.size)};
  font-weight: ${(props) => (props.bold ? fontWeight.BOLD : fontWeight.NORMAL)};
  color: ${(props) => props.color};
`;

function Text({ children, size, bold, color, className }) {
  return (
    <StyledText size={size} bold={bold} color={color} className={className}>
      {children}
    </StyledText>
  );
}

export default Text;
