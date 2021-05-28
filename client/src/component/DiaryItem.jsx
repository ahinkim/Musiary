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

export default function DiaryItem({ date, diaryContent, onClick }) {
  return (
    <Wrapper onClick={onClick}>
      <DiaryDate size={14}>{date}</DiaryDate>
      <DiaryPreview size={13}>{diaryContent}</DiaryPreview>
    </Wrapper>
  );
}
