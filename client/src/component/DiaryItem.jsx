import React from "react";
import styled from "styled-components";
import { color } from "../asset/palette";
import Text from "./Text";

const Wrapper = styled.div`
  padding: 14px 0;
  border-bottom: 1px solid ${color.LIGHT_GREY};
`;

const DiaryDate = styled(Text)`
  margin-bottom: 18px;
`;

const DiaryPreview = styled(Text)`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default function DiaryItem({ date, diaryContent }) {
  return (
    <Wrapper>
      <DiaryDate size={14}>2021.04.20</DiaryDate>
      <DiaryPreview size={13}>
        우선은 대충 이런 글을 적었다고 가정하자우선은 대충 이런 글을 적었다고 가정하자우선은 대충 이런 글을 적었다고
        가정하자우선은 대충 이런 글을 적었다고 가정하자우선은 대충 이런 글을 적었다고 가정하자우선은 대충 이런 글을 적었다고
        가정하자
      </DiaryPreview>
    </Wrapper>
  );
}
