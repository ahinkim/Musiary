import React from "react";
import MusicItem from "./MusicItem";
import styled from "styled-components";

const Wrapper = styled.div`
  height: calc(93vh - 63px); // 100vh - 헤더 height - footer height
  overflow-y: scroll;
  padding: 0 18px;
`;

export default function MusicList({ list }) {
  return (
    <Wrapper>
      {[...list].map(({ title, coverImg, src }, idx) => (
        <MusicItem title={title} coverImg={coverImg} key={idx} src={src} />
      ))}
    </Wrapper>
  );
}
