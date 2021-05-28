import React from "react";
import { useHistory } from "react-router";
import { content } from "../asset/Content";
import DiaryItem from "../component/DiaryItem";
import Grid from "../component/Grid";
import Header from "../component/Header";
import Text from "../component/Text";
import useDiaryHistory from "../hook/useDiaryHistory";
import DateUtil from "../util/Date";

export default function DiaryHistory() {
  const history = useHistory();
  const { diaries, isLoading: isDiaryLoading } = useDiaryHistory();
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
        {diaries[diaries.length - 1] && (
          <DiaryItem
            date={DateUtil.removeTimeFromDate(diaries[diaries.length - 1].createdAt)}
            diaryContent={diaries[diaries.length - 1].content}
            onClick={() => {
              history.push({ pathname: "/history/diary/:", state: { id: diaries.length - 1 } });
            }}
          />
        )}
        {diaries[diaries.length - 2] && (
          <DiaryItem
            date={DateUtil.removeTimeFromDate(diaries[diaries.length - 2].createdAt)}
            diaryContent={diaries[diaries.length - 2].content}
            onClick={() => {
              history.push({ pathname: "/history/diary/:", state: { id: diaries.length - 2 } });
            }}
          />
        )}
        {diaries[diaries.length - 3] && (
          <DiaryItem
            date={DateUtil.removeTimeFromDate(diaries[diaries.length - 3].createdAt)}
            diaryContent={diaries[diaries.length - 3].content}
            onClick={() => {
              history.push({ pathname: "/history/diary/:", state: { id: diaries.length - 3 } });
            }}
          />
        )}
        {diaries[diaries.length - 4] && (
          <DiaryItem
            date={DateUtil.removeTimeFromDate(diaries[diaries.length - 4].createdAt)}
            diaryContent={diaries[diaries.length - 4].content}
            onClick={() => {
              history.push({ pathname: "/history/diary/:", state: { id: diaries.length - 4 } });
            }}
          />
        )}
        {diaries[diaries.length - 5] && (
          <DiaryItem
            date={DateUtil.removeTimeFromDate(diaries[diaries.length - 5].createdAt)}
            diaryContent={diaries[diaries.length - 5].content}
            onClick={() => {
              history.push({ pathname: "/history/diary/:", state: { id: diaries.length - 5 } });
            }}
          />
        )}
        {diaries[diaries.length - 6] && (
          <DiaryItem
            date={DateUtil.removeTimeFromDate(diaries[diaries.length - 6].createdAt)}
            diaryContent={diaries[diaries.length - 6].content}
            onClick={() => {
              history.push({ pathname: "/history/diary/:", state: { id: diaries.length - 6 } });
            }}
          />
        )}
        {diaries[diaries.length - 7] && (
          <DiaryItem
            date={DateUtil.removeTimeFromDate(diaries[diaries.length - 7].createdAt)}
            diaryContent={diaries[diaries.length - 7].content}
            onClick={() => {
              history.push({ pathname: "/history/diary/:", state: { id: diaries.length - 7 } });
            }}
          />
        )}
        {diaries[diaries.length - 8] && (
          <DiaryItem
            date={DateUtil.removeTimeFromDate(diaries[diaries.length - 8].createdAt)}
            diaryContent={diaries[diaries.length - 8].content}
            onClick={() => {
              history.push({ pathname: "/history/diary/:", state: { id: diaries.length - 8 } });
            }}
          />
        )}
        {diaries[diaries.length - 9] && (
          <DiaryItem
            date={DateUtil.removeTimeFromDate(diaries[diaries.length - 9].createdAt)}
            diaryContent={diaries[diaries.length - 9].content}
            onClick={() => {
              history.push({ pathname: "/history/diary/:", state: { id: diaries.length - 9 } });
            }}
          />
        )}
        {diaries[diaries.length - 10] && (
          <DiaryItem
            date={DateUtil.removeTimeFromDate(diaries[diaries.length - 10].createdAt)}
            diaryContent={diaries[diaries.length - 10].content}
            onClick={() => {
              history.push({ pathname: "/history/diary/:", state: { id: diaries.length - 10 } });
            }}
          />
        )}
        {diaries[diaries.length - 11] && (
          <DiaryItem
            date={DateUtil.removeTimeFromDate(diaries[diaries.length - 11].createdAt)}
            diaryContent={diaries[diaries.length - 11].content}
            onClick={() => {
              history.push({ pathname: "/history/diary/:", state: { id: diaries.length - 11 } });
            }}
          />
        )}
        {diaries[diaries.length - 12] && (
          <DiaryItem
            date={DateUtil.removeTimeFromDate(diaries[diaries.length - 12].createdAt)}
            diaryContent={diaries[diaries.length - 12].content}
            onClick={() => {
              history.push({ pathname: "/history/diary/:", state: { id: diaries.length - 12 } });
            }}
          />
        )}
        {diaries[diaries.length - 13] && (
          <DiaryItem
            date={DateUtil.removeTimeFromDate(diaries[diaries.length - 13].createdAt)}
            diaryContent={diaries[diaries.length - 13].content}
            onClick={() => {
              history.push({ pathname: "/history/diary/:", state: { id: diaries.length - 13 } });
            }}
          />
        )}
        {diaries[diaries.length - 14] && (
          <DiaryItem
            date={DateUtil.removeTimeFromDate(diaries[diaries.length - 14].createdAt)}
            diaryContent={diaries[diaries.length - 14].content}
            onClick={() => {
              history.push({ pathname: "/history/diary/:", state: { id: diaries.length - 14 } });
            }}
          />
        )}
      </Grid>
    </>
  );
}
