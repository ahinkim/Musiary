import React from "react";
import styled from "styled-components";

const GridWrapper = styled.div`
  padding: 0 18px;
`;

export default function Grid({ children, className }) {
  return <GridWrapper className={className}>{children}</GridWrapper>;
}
