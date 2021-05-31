import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { content } from "../asset/Content";
import Icon from "../asset/Icon";
import { color } from "../asset/palette";
import CardSongWrapper from "../component/CardSongWrapper";
import CardTitleWrapper from "../component/CardTitleWrapper";
import CardView from "../component/CardView";
import DiaryItem from "../component/DiaryItem";
import Grid from "../component/Grid";
import Header from "../component/Header";
import MusicList from "../component/MusicList";
import NoMusicFunction from "../component/NoMusic";
import Text from "../component/Text";
import useDiaryHistory from "../hook/useDiaryHistory";
import useMusicHistory from "../hook/useMusicHistory";
import DateUtil from "../util/Date";

const CardWrapper = styled.div`
  padding: 14px 4px 4px 4px;
  width: 100%;
  height: 82%;
  border-top: 1px solid ${color.LIGHT_GREY};
`;

export default function MenuPage() {
  const history = useHistory();
  const { diaries, isLoading: isDiaryLoading } = useDiaryHistory();
  const { musicHistory, isLoading: isMusicHistoryLoading } = useMusicHistory();
  if (isDiaryLoading || isMusicHistoryLoading) return <div></div>;
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
        <Text size={12}>{content.MY_PAGE}</Text>
      </Header>
      <Grid>
        <CardView>
          <CardTitleWrapper>
            <Text size={13} bold={true}>
              {content.DIARY_I_WROTE}
            </Text>
            <Icon
              type="ARROW_FORWARD"
              onClick={() => {
                history.push("/history/diary");
              }}
            />
          </CardTitleWrapper>
          <CardWrapper>
            {diaries[diaries.length - 1] && (
              <DiaryItem
                date={DateUtil.removeTimeFromDate(diaries[diaries.length - 1].createdAt)}
                diaryContent={diaries[diaries.length - 1].content}
              />
            )}
            {diaries[diaries.length - 2] && (
              <DiaryItem
                date={DateUtil.removeTimeFromDate(diaries[diaries.length - 2].createdAt)}
                diaryContent={diaries[diaries.length - 2].content}
              />
            )}
          </CardWrapper>
        </CardView>

        <CardView>
          <CardTitleWrapper>
            <Text size={13} bold={true}>
              {content.MUSIC_I_LISTENED}
            </Text>
            <Icon
              type="ARROW_FORWARD"
              onClick={() => {
                history.push("/history/music");
              }}
            />
          </CardTitleWrapper>
          <CardSongWrapper>
            {musicHistory.musics.length > 0 ? (
              <MusicList
                list={musicHistory.musics.slice(0, 3).map((music) => ({
                  title: music.title,
                  coverImg: music.coverImg,
                  src: music.src,
                  mood: music.mood,
                  id: music.id,
                }))}
              />
            ) : (
              <NoMusicFunction>{content.NO_MUSIC}</NoMusicFunction>
            )}
          </CardSongWrapper>
        </CardView>
      </Grid>
    </>
  );
}
