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

export default function MusicItem({ title, author, coverImg }) {
  return (
    <Wrapper>
      <CoverImage src={coverImg} alt="music_cover" />
      <SongInfoWrapper>
        <Text bold size={13}>
          {title}
        </Text>
        <Text size={12} color={color.LIGHT_GREY}>
          {author}
        </Text>
      </SongInfoWrapper>
    </Wrapper>
  );
}
