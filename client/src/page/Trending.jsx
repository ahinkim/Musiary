import React from "react";
import { content } from "../asset/Content";
import { ExampleImg } from "../asset/ExampleImg";
import Header from "../component/Header";
import MusicList from "../component/MusicList";
import NowPlaying from "../component/NowPlaying";
import Text from "../component/Text";

export default function Trending() {
  const createDummySong = () => ({ title: "Happy", author: "Pharrell Williams", coverImg: ExampleImg.HAPPY_COVER });
  const dummySongs = new Array(20).fill(createDummySong());

  return (
    <>
      <Header leftIconType="ARROW_BACK" rightIconType="MENU">
        <Text size={12}>{content.BLOOMY_RECOMMEND}</Text>
      </Header>
      <MusicList list={dummySongs} />
      <NowPlaying />
    </>
  );
}
