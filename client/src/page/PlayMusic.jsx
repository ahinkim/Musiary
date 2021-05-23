import React from "react";
import styled from "styled-components";
import { ExampleImg } from "../asset/ExampleImg";
import Icon from "../asset/Icon";
import { color } from "../asset/palette";
import { useToggle } from "../hook/useToggle";
import CSSUnit from "../util/CSSUnit";
import Header from "../component/Header";
import { content } from "../asset/Content";
import Text from "../component/Text";

const MusicWrapper = styled.div`
  padding: 0 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProgressWrapper = styled.div`
  width: 88vw;
  height: 2px;
  margin-top: 7vh;
  background-color: ${color.LIGHT_GREY};
`;

const ProgressColor = styled.div`
  width: ${(props) => CSSUnit.percent(props.progress)};
  height: 2px;
  background-color: ${color.BLUE};
`;

const MusicController = styled.div`
  margin-top: 20px;
  display: flex;
`;

const CoverImage = styled.img`
  margin-top: 7vh;
  margin-bottom: 7vh;
  width: 88vw;
`;

const PlayTime = styled.div`
  margin-top: 1vh;
  margin-bottom: 4vh;
  display: relative;
`;

const LeftTime = styled.div`
  position: absolute;
  left: 6vw;
`;
const RightTime = styled.div`
  position: absolute;
  right: 6vw;
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
  const { title, coverImg } = createDummySong();
  const [isPlaying, toggle] = useToggle(false);
  return (
    <>
      <Header leftIconType="ARROW_BACK" rightIconType="X">
        <Text size={12}>{content.HAPPY_RECOMMEND}</Text>
      </Header>
      <MusicWrapper>
        <CoverImage src={coverImg} alt="music_cover" />
        <Text bold size={22}>
          {title}
        </Text>
        <ProgressBar progress={33} />
      </MusicWrapper>
      <PlayTime>
        <LeftTime>
          <Text size={12} color={color.BLUE}>
            1:35
          </Text>
        </LeftTime>
        <RightTime>
          <Text size={12} color={color.LIGHT_GREY}>
            3:22
          </Text>
        </RightTime>
      </PlayTime>
      <MusicWrapper>
        <MusicController>
          <Icon type="REWIND" size={45} />
          {isPlaying ? <Icon type="PAUSE" size={45} onClick={toggle} /> : <Icon type="PLAY" size={45} onClick={toggle} />}
          <Icon type="FAST_FORWARD" size={45} />
        </MusicController>
      </MusicWrapper>
    </>
  );
}
