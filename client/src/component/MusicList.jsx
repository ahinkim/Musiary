import React from "react";
import MusicItem from "./MusicItem";
import styled from "styled-components";
import useAudio from "../hook/useAudio";
import ApiRequest from "../util/ApiRequest";

const Wrapper = styled.div`
  height: calc(93vh - 63px); // 100vh - 헤더 height - footer height
  overflow-y: scroll;
  padding: 0 18px;
`;

export default function MusicList({ list }) {
  const musicProps = useAudio();
  return (
    <Wrapper>
      {[...list].map(({ title, coverImg, src, id, mood }, idx) => (
        <MusicItem
          title={title}
          coverImg={coverImg}
          key={id}
          src={src}
          mood={mood}
          onClick={async () => {
            await ApiRequest.makePlayHistory(id, title, src, mood, coverImg);
            musicProps.setInfo({ playList: musicProps.playList, current: idx });
            if (musicProps.isPlaying) {
              musicProps.pause();
            }
            musicProps.setURL(src);
            musicProps.play();
          }}
        />
      ))}
    </Wrapper>
  );
}
