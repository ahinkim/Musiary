import React from "react";
import { useHistory } from "react-router";
import { content } from "../asset/Content";
import { ExampleImg } from "../asset/ExampleImg";
import Header from "../component/Header";
import MusicList from "../component/MusicList";
import NoMusicFunction from "../component/NoMusic";
import NowPlaying from "../component/NowPlaying";
import Text from "../component/Text";
import useAudio from "../hook/useAudio";
import useMusicHistory from "../hook/useMusicHistory";

export default function MusicHistory() {
  const history = useHistory();
  const { musicHistory, isLoading: isMusicHistoryLoading } = useMusicHistory();
  const musicProps = useAudio();

  React.useEffect(() => {
    if (!musicHistory) return;
    if (!musicHistory.musics) return;

    const currentListeningSong = musicProps.playList[musicProps.current];
    if (!currentListeningSong) {
      musicProps.setInfo({ playList: [...musicHistory.musics], current: -1 });
      return;
    }

    musicProps.setInfo({ playList: [currentListeningSong, ...musicHistory.musics], current: 0 });
  }, [musicHistory]);

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
          list={musicProps.playList.map((music) => ({
            id: music.id,
            title: music.title,
            coverImg: music.coverImg,
            src: music.src,
            mood: music.mood,
          }))}
        />
      ) : (
        <NoMusicFunction>{content.NO_MUSIC}</NoMusicFunction>
      )}
      {musicProps.playList[musicProps.current] && <NowPlaying />}
    </>
  );
}
