import React from "react";
import { getContentByMood } from "../asset/Content";
import { ExampleImg } from "../asset/ExampleImg";
import Header from "../component/Header";
import MusicList from "../component/MusicList";
import NowPlaying from "../component/NowPlaying";
import Text from "../component/Text";
import useTodayDiary from "../hook/useTodayDiary";
import { useHistory, useLocation } from "react-router";
import ApiRequest from "../util/ApiRequest";

export default function Trending() {
  const [songs, setSongs] = React.useState([]);
  const history = useHistory();
  const location = useLocation();
  const { diaries, isLoading, isError } = useTodayDiary();

  React.useEffect(() => {
    (async () => {
      console.log(diaries, isLoading);
      if (isLoading) return;
      if (diaries === null) return;
      if (!isLoading && diaries.length === 0) {
        if (location.state?.isPost) {
        } else {
          history.push("/write");
        }
        return;
      }
      try {
        const res = await ApiRequest.server.get(`/music?mood=${diaries[0].mood}`);
        const musics = res.data.musics.map((music) => ({ title: music.title, src: music.src, coverImg: music.waveform }));
        setSongs(musics);
      } catch (e) {}
    })();
  }, [isLoading, diaries]);

  if (isLoading) return <div></div>;
  if (isError) return <div>데이터 로드 실패</div>;

  return (
    <>
      {diaries && (
        <>
          <Header
            leftIconType="NOTHING"
            rightIconType="MENU"
            rightOnClick={() => {
              history.push("/menu");
            }}
          >
            {diaries.length > 0 && <Text size={12}>{getContentByMood(diaries[0].mood)}</Text>}
          </Header>
          <MusicList list={songs} />
          <NowPlaying />
        </>
      )}
    </>
  );
}
