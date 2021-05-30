import React from "react";
import Text from "./Text";
import styled from "styled-components";
import { color } from "../asset/palette";

const Wrapper = styled.div`
  display: flex;
  padding: 8px 0;
`;

const SongInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 9px;
`;

const CoverImage = styled.img`
  display: block;
  width: 45px;
  height: 45px;
`;

export default function MusicItem({ title, coverImg, onClick }) {
  return (
    <Wrapper onClick={onClick}>
      <CoverImage src={coverImg} alt="music_cover" />
      <SongInfoWrapper>
        <Text bold size={13}>
          {title}
        </Text>
      </SongInfoWrapper>
    </Wrapper>
  );
}
