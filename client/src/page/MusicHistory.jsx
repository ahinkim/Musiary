import React from "react";
import { content } from "../asset/Content";
import { ExampleImg } from "../asset/ExampleImg";
import Header from "../component/Header";
import MusicList from "../component/MusicList";
import NowPlaying from "../component/NowPlaying";
import Text from "../component/Text";

export default function MusicHistory() {
  const createDummySong = () => ({ title: "Happy", coverImg: ExampleImg.HAPPY_COVER });
  const dummySongs = new Array(20).fill(createDummySong());

  return (
    <>
      <Header leftIconType="ARROW_BACK" rightIconType="MENU">
        <Text size={12}>{content.MUSIC_I_LISTENED}</Text>
      </Header>
      <MusicList list={dummySongs} />
      <NowPlaying />
    </>
  );
}
