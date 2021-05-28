import React from "react";
import { useHistory } from "react-router";
import { content } from "../asset/Content";
import { ExampleImg } from "../asset/ExampleImg";
import Header from "../component/Header";
import MusicList from "../component/MusicList";
import NoMusicFunction from "../component/NoMusic";
import NowPlaying from "../component/NowPlaying";
import Text from "../component/Text";
import useMusicHistory from "../hook/useMusicHistory";

export default function MusicHistory() {
  const createDummySong = () => ({ title: "Happy", coverImg: ExampleImg.HAPPY_COVER });
  const dummySongs = new Array(20).fill(createDummySong());
  const history = useHistory();
  const { musicHistory, isLoading: isMusicHistoryLoading } = useMusicHistory();
  if (isMusicHistoryLoading) return <div></div>;

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
        <Text size={12}>{content.MUSIC_I_LISTENED}</Text>
      </Header>
      {musicHistory.musics.length > 0 ? (
        <MusicList
          list={musicHistory.musics.map((music) => ({
            title: music.title,
            coverImg: music.waveform,
            src: music.src,
          }))}
        />
      ) : (
        <NoMusicFunction>{content.NO_MUSIC}</NoMusicFunction>
      )}
      <NowPlaying />
    </>
  );
}
