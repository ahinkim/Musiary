import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { content } from "../asset/Content";
import { ExampleImg } from "../asset/ExampleImg";
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
import useTrendingMusic from "../hook/useTrendingMusic";
import DateUtil from "../util/Date";

const LittleTitleText = styled(Text)`
  padding-left: 6px;
  margin-top: 10px;
`;
const CardWrapper = styled.div`
  padding: 4px 4px 4px 4px;
  width: 100%;
  height: 82%;
  border-top: 1px solid ${color.LIGHT_GREY};
  border-bottom: 1px solid ${color.LIGHT_GREY};
`;

export default function MenuPage() {
  const createDummySong = () => ({ title: "Happy", coverImg: ExampleImg.HAPPY_COVER });
  const oneSong = new Array(1).fill(createDummySong());
  const history = useHistory();
  const { diaries, isLoading: isDiaryLoading } = useDiaryHistory();
  const { musics, isLoading: isMusicLoading } = useTrendingMusic();
  const { musicHistory, isLoading: isMusicHistoryLoading } = useMusicHistory();
  if (isDiaryLoading || isMusicLoading || isMusicHistoryLoading) return <div></div>;

  return (
    <>
      <Header
        leftIconType="ARROW_BACK"
        rightIconType="MENU"
        leftOnClick={() => {
          history.goBack();
        }}
        rightOnClick={() => {
          history.goBack();
        }}
      >
        <Text size={12}>{content.SHORTCUT}</Text>
      </Header>
      <Grid>
        <CardView>
          <CardTitleWrapper>
            <Text size={13} bold={true}>
              {content.MY_PAGE}
            </Text>
            <Icon
              type="ARROW_FORWARD"
              onClick={() => {
                history.push("/mypage");
              }}
            />
          </CardTitleWrapper>
          <CardWrapper>
            <LittleTitleText size={12} bold={true}>
              {content.DIARY_I_WROTE}
            </LittleTitleText>
            <Grid>
              <DiaryItem
                date={DateUtil.removeTimeFromDate(diaries[diaries.length - 1].createdAt)}
                diaryContent={diaries[diaries.length - 1].content}
              />
            </Grid>
            <LittleTitleText size={12} bold={true}>
              {content.MUSIC_I_LISTENED}
            </LittleTitleText>

            {musicHistory.musics.length > 0 ? (
              <MusicList
                list={[musicHistory.musics[musicHistory.musics.length - 1]].map((music) => ({
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
          </CardWrapper>
        </CardView>

        <CardView>
          <CardTitleWrapper>
            <Text size={13} bold={true}>
              {content.TRENDING}
            </Text>
            <Icon
              type="ARROW_FORWARD"
              onClick={() => {
                history.push("/");
              }}
            />
          </CardTitleWrapper>
          <CardSongWrapper>
            {musics && (
              <MusicList
                list={musics.slice(0, 3).map((music) => ({
                  title: music.title,
                  coverImg: music.waveform,
                  src: music.src,
                  id: music.id,
                  mood: music.mood,
                }))}
              />
            )}
          </CardSongWrapper>
        </CardView>
      </Grid>
    </>
  );
}
