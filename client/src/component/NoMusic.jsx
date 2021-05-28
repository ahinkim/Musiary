import React from "react";
import styled from "styled-components";
import Text from "./Text";

const NoMusic = styled(Text)`
  margin-top: 15px;
  margin-left: 15px;
  margin-bottom: 15px;
  font-size: 13px;
`;

export default function NoMusicFunction({ children }) {
  return <NoMusic>{children}</NoMusic>;
}
