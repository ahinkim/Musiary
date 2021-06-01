import React from "react";
import styled from "styled-components";
import Icon from "../asset/Icon";
import { color } from "../asset/palette";
import CSSUnit from "../util/CSSUnit";
import Header from "../component/Header";
import { content } from "../asset/Content";
import Text from "../component/Text";
import useAudio from "../hook/useAudio";
import timeUtil from "../util/Time";
import { useHistory } from "react-router";

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
  const musicProps = useAudio();
  const history = useHistory();

  if (musicProps.playList.length === 0) {
    history.push("/");
    return <div></div>;
  }

  return (
    <>
      <Header
        leftIconType="ARROW_BACK"
        rightIconType="NOTHING"
        leftOnClick={() => {
          history.goBack();
        }}
      >
        <Text size={12}>{"현재 플레이중인 노래"}</Text>
      </Header>
      <MusicWrapper>
        <CoverImage
          src={
            musicProps.playList
              ? musicProps.playList[musicProps.current].coverImg
              : "https://previews.123rf.com/images/tanusha8686/tanusha86861707/tanusha8686170700028/81893769-%ED%88%AC%EB%AA%85-%ED%95%9C-%EB%B0%B0%EA%B2%BD%EC%97%90-cd-%EB%94%94%EC%8A%A4%ED%81%AC%EC%9E%85%EB%8B%88%EB%8B%A4-%ED%98%84%EC%8B%A4%EA%B0%90%EC%9E%88%EB%8A%94-cd-%EB%B2%A1%ED%84%B0-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%A0%88%EC%9D%B4-%EC%85%98-.jpg"
          }
          alt="music_cover"
        />
        <Text bold size={22}>
          {musicProps.current !== -1 ? musicProps.playList[musicProps.current].title : "노래를 골라주세요"}
        </Text>
        <ProgressBar progress={!!musicProps.progress ? musicProps.progress : 0} />
      </MusicWrapper>
      <PlayTime>
        <LeftTime>
          <Text size={12} color={color.BLUE}>
            {timeUtil.secToMin(musicProps.currentTime)}
          </Text>
        </LeftTime>
        <RightTime>
          <Text size={12} color={color.LIGHT_GREY}>
            {!!musicProps.duration ? timeUtil.secToMin(musicProps.duration) : timeUtil.secToMin(0)}
          </Text>
        </RightTime>
      </PlayTime>
      <MusicWrapper>
        {musicProps.current !== -1 ? (
          <>
            <MusicController>
              <Icon
                type="REWIND"
                size={45}
                onClick={() => {
                  if (musicProps.currentTime < 3) {
                    musicProps.playPrevMusic();
                  } else {
                    musicProps.replay();
                  }
                }}
              />
              {musicProps.isPlaying ? (
                <Icon
                  type="PAUSE"
                  size={45}
                  onClick={() => {
                    musicProps.pause();
                  }}
                />
              ) : (
                <Icon
                  type="PLAY"
                  size={45}
                  onClick={() => {
                    musicProps.play();
                  }}
                />
              )}
              <Icon
                type="FAST_FORWARD"
                onClick={async () => {
                  await musicProps.playNextMusic();
                }}
                size={45}
              />
            </MusicController>
          </>
        ) : (
          <div></div>
        )}
      </MusicWrapper>
    </>
  );
}
