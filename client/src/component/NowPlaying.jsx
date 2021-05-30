import React from "react";
import styled from "styled-components";
import CSSUnit from "../util/CSSUnit";
import MusicItem from "./MusicItem";
import { color } from "../asset/palette";
import Icon from "../asset/Icon";
import useAudio from "../hook/useAudio";
import { useHistory } from "react-router";

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
  const musicProps = useAudio();
  const history = useHistory();

  const openPlayPage = (e) => {
    history.push("/play");
  };

  return (
    <NowPlayingWrapper>
      <ProgressBar progress={musicProps.progress ? musicProps.progress : 0} />
      <MusicWrapper>
        <MusicItem
          onClick={openPlayPage}
          title={musicProps.current !== -1 ? musicProps.playList[musicProps.current].title : "노래를 골라주세요"}
          coverImg={
            musicProps.current !== -1
              ? musicProps.playList[musicProps.current].coverImg
              : "https://previews.123rf.com/images/tanusha8686/tanusha86861707/tanusha8686170700028/81893769-%ED%88%AC%EB%AA%85-%ED%95%9C-%EB%B0%B0%EA%B2%BD%EC%97%90-cd-%EB%94%94%EC%8A%A4%ED%81%AC%EC%9E%85%EB%8B%88%EB%8B%A4-%ED%98%84%EC%8B%A4%EA%B0%90%EC%9E%88%EB%8A%94-cd-%EB%B2%A1%ED%84%B0-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%A0%88%EC%9D%B4-%EC%85%98-.jpg"
          }
        />
        <MusicController>
          {musicProps.current !== -1 && (
            <>
              <Icon
                type="REWIND"
                size={28}
                dataControll="controll"
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
                  dataControll="controll"
                  type="PAUSE"
                  size={28}
                  onClick={() => {
                    musicProps.pause();
                  }}
                />
              ) : (
                <Icon type="PLAY" size={28} dataControll="controll" onClick={() => musicProps.play()} />
              )}
              <Icon
                type="FAST_FORWARD"
                size={28}
                onClick={() => {
                  musicProps.playNextMusic();
                }}
              />
            </>
          )}
        </MusicController>
      </MusicWrapper>
    </NowPlayingWrapper>
  );
}
