import React from "react";
import styled from "styled-components";
import { ExampleImg } from "../asset/ExampleImg";
import CSSUnit from "../util/CSSUnit";
import MusicItem from "./MusicItem";
import { color } from "../asset/palette";
import Icon from "../asset/Icon";
import { useToggle } from "../hook/useToggle";

const NowPlayingWrapper = styled.footer`
  position: sticky;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 80x;
`;

const MusicWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px;
`;

const ProgressWrapper = styled.div`
  width: 100vw;
  height: 2px;
  background-color: ${color.LIGHT_GREY};
`;

const ProgressColor = styled.div`
  width: ${(props) => CSSUnit.percent(props.progress)};
  height: 2px;
  background-color: ${color.BLUE};
`;

const MusicController = styled.div`
  display: flex;
`;

function ProgressBar({ progress }) {
  return (
    <ProgressWrapper>
      <ProgressColor progress={progress} />
    </ProgressWrapper>
  );
}

export default function NowPlaying() {
  const createDummySong = () => ({ title: "Happy", coverImg: ExampleImg.HAPPY_COVER });
  const { title, playTime, coverImg } = createDummySong();
  const [isPlaying, toggle] = useToggle(false);
  return (
    <NowPlayingWrapper>
      <ProgressBar progress={33} />
      <MusicWrapper>
        <MusicItem title={title} coverImg={coverImg} />
        <MusicController>
          <Icon type="REWIND" size={28} />
          {isPlaying ? <Icon type="PAUSE" size={28} onClick={toggle} /> : <Icon type="PLAY" size={28} onClick={toggle} />}
          <Icon type="FAST_FORWARD" size={28} />
        </MusicController>
      </MusicWrapper>
    </NowPlayingWrapper>
  );
}
