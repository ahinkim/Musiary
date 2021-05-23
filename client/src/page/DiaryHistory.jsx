import React from "react";
import { useHistory } from "react-router";
import { content } from "../asset/Content";
import DiaryItem from "../component/DiaryItem";
import Grid from "../component/Grid";
import Header from "../component/Header";
import Text from "../component/Text";

export default function DiaryHistory() {
  const history = useHistory();
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
        <DiaryItem />
        <DiaryItem />
        <DiaryItem />
        <DiaryItem />
        <DiaryItem />
        <DiaryItem />
        <DiaryItem />
        <DiaryItem />
        <DiaryItem />
        <DiaryItem />
        <DiaryItem />
        <DiaryItem />
        <DiaryItem />
        <DiaryItem />
      </Grid>
    </>
  );
}
