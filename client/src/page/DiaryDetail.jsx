import React from "react";
import { content } from "../asset/Content";
import Header from "../component/Header";
import Text from "../component/Text";
import styled from "styled-components";
import Grid from "../component/Grid";
import { color } from "../asset/palette";
import { useHistory } from "react-router";
import useDiaryHistory from "../hook/useDiaryHistory";
import DateUtil from "../util/Date";
import { useLocation } from "react-router-dom";

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
  const history = useHistory();
  const { diaries, isLoading: isDiaryLoading } = useDiaryHistory();
  const location = useLocation();
  if (isDiaryLoading) return <div></div>;
  return (
    <>
      <Header
        leftIconType="ARROW_BACK"
        rightIconType="MENU"
        leftOnClick={() => {
          history.goBack();
        }}
        rightOnClick={() => {
          history.push("/");
        }}
      >
        <Text size={12}>{content.DIARY_I_WROTE}</Text>
      </Header>
      <Grid>
        <DiaryDate>{DateUtil.removeTimeFromDate(diaries[location.state?.id].createdAt)}</DiaryDate>
        <DiaryContent>{diaries[location.state?.id].content}</DiaryContent>
      </Grid>
    </>
  );
}
