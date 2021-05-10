import React from "react";
import { content } from "../asset/Content";
import Header from "../component/Header";
import Text from "../component/Text";
import styled from "styled-components";
import Grid from "../component/Grid";
import { color } from "../asset/palette";

const DiaryDate = styled(Text)`
  margin: 24px 0 6px 0;
`;
const DiaryContent = styled.div`
  width: 100%;
  height: 340px;
  padding: 19px 12px;
  background-color: ${color.LIGHT_BLUE};
  border: none;
  border-radius: 7px;
  outline: none;
  resize: none;
  line-height: 20px;
  overflow-y: auto;
  font-size: 14px;
`;

export default function DiaryDetail() {
  return (
    <>
      <Header leftIconType="ARROW_BACK" rightIconType="MENU">
        <Text size={12}>{content.DIARY_I_WROTE}</Text>
      </Header>
      <Grid>
        <DiaryDate>2020.04.30</DiaryDate>
        <DiaryContent>우선은 대충 이런 글을 적었다고 가정하자</DiaryContent>
      </Grid>
    </>
  );
}
