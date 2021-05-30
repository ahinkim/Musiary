import React from "react";
import { AudioContext, PlayListContext } from "../context/AudioProvider";
import ApiRequest from "../util/ApiRequest";

const useAudio = () => {
  const audio = React.useContext(AudioContext);
  const { info, setInfo } = React.useContext(PlayListContext);
  const { playList, current } = info;

  const [_, _forceUpdate] = React.useState(false);
  const forceUpdate = () => _forceUpdate(!_);

  React.useEffect(() => {
    audio.current.addEventListener("timeupdate", forceUpdate);
    audio.current.addEventListener("play", forceUpdate);
    audio.current.addEventListener("ended", playNextMusic);
    return () => {
      audio.current.removeEventListener("timeupdate", forceUpdate);
      audio.current.removeEventListener("play", forceUpdate());
      audio.current.removeEventListener("ended", playNextMusic);
    };
  });

  const play = () => {
    audio.current.play();
  };
  const pause = () => audio.current.pause();
  const reset = () => (audio.current = new Audio());
  const setURL = (url) => {
    audio.current = new Audio(url);
  };

  const replay = () => {
    audio.current.pause();
    audio.current.currentTime = 0;
    audio.current.play();
  };

  const playNextMusic = async () => {
    if (current === -1) {
      return;
    }

    if (playList.length === 0) return;

    const nextCurrent = (current + 1) % playList.length;
    const nextMusic = playList[(current + 1) % playList.length];

    audio.current.pause();
    audio.current.currentTime = 0;
    setURL(nextMusic.src);
    audio.current.play();

    await ApiRequest.makePlayHistory(nextMusic.id, nextMusic.title, nextMusic.src, nextMusic.mood);

    setInfo({ playList, current: nextCurrent });
  };

  const playPrevMusic = async () => {
    if (current === -1) {
      return;
    }

    if (playList.length === 0) return;

    let nextCurrent = current - 1;

    if (current - 1 < 0) {
      nextCurrent = playList.length - 1;
    }

    const nextMusic = playList[nextCurrent];

    audio.current.pause();
    audio.current.currentTime = 0;
    setURL(nextMusic.src);
    audio.current.play();

    await ApiRequest.makePlayHistory(nextMusic.id, nextMusic.title, nextMusic.src, nextMusic.mood);

    setInfo({ playList, current: nextCurrent });
  };

  return {
    isPlaying: !audio.current.paused,
    currentTime: audio.current.currentTime,
    duration: audio.current.duration,
    progress: Math.floor((audio.current.currentTime / audio.current.duration) * 100),
    play,
    pause,
    setURL,
    reset,
    replay,
    playList,
    current,
    playNextMusic,
    setInfo,
    playPrevMusic,
  };
};

export default useAudio;
