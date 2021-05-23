import React from "react";
import { getContentByMood } from "../asset/Content";
import { ExampleImg } from "../asset/ExampleImg";
import Header from "../component/Header";
import MusicList from "../component/MusicList";
import NowPlaying from "../component/NowPlaying";
import Text from "../component/Text";
import useTodayDiary from "../hook/useTodayDiary";
import { useHistory } from "react-router";
import ApiRequest from "../util/ApiRequest";

export default function Trending() {
  const [songs, setSongs] = React.useState([]);
  const history = useHistory();
  const { diaries, isLoading, isError } = useTodayDiary();

  React.useEffect(() => {
    (async () => {
      if (!diaries) return;
      try {
        const res = await ApiRequest.server.get(`/music?mood=${diaries[0].mood}`);
        const musics = res.data.musics.map((music) => ({ title: music.title, src: music.src, coverImg: music.waveform }));
        setSongs(musics);
      } catch (e) {}
    })();
  }, [diaries]);

  if (isLoading) return <div></div>;
  if (isError) return <div>데이터 로드 실패</div>;
  if (diaries.length === 0) {
    history.push("/write");
  }

  return (
    <>
      <Header
        leftIconType="NOTHING"
        rightIconType="MENU"
        rightOnClick={() => {
          history.push("/menu");
        }}
      >
        <Text size={12}>{getContentByMood(diaries[0].mood)}</Text>
      </Header>
      <MusicList list={songs} />
      <NowPlaying />
    </>
  );
}
