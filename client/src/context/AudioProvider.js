import React from "react";

export const AudioContext = React.createContext(null);
export const MusicInfoContext = React.createContext(null);
export const PlayListContext = React.createContext(null);

export default function AudioProvider({ children }) {
  const audio = React.useRef(new Audio());
  const [musicInfo, setMusicInfo] = React.useState(null);
  const [info, setInfo] = React.useState({ playList: [], current: -1 });
  return (
    <PlayListContext.Provider value={{ info, setInfo }}>
      <MusicInfoContext.Provider value={{ musicInfo, setMusicInfo }}>
        <AudioContext.Provider value={audio}>{children}</AudioContext.Provider>
      </MusicInfoContext.Provider>
    </PlayListContext.Provider>
  );
}
