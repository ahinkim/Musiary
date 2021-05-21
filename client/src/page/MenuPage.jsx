import React from "react";
import styled from "styled-components";
import { content } from "../asset/Content";
import { ExampleImg } from "../asset/ExampleImg";
import Icon from "../asset/Icon";
import { color } from "../asset/palette";
import CardSongWrapper from "../component/CardSongWrapper";
import CardTitleWrapper from "../component/CardTitleWrapper";
import CardView from "../component/CardView";
import DiaryItem from "../component/DiaryItem";
import Grid from "../component/Grid";
import Header from "../component/Header";
import MusicList from "../component/MusicList";
import Text from "../component/Text";

const LittleTitleText = styled(Text)`
  padding-left: 6px;
  margin-top: 10px;
`;
const CardWrapper = styled.div`
  padding: 4px 4px 4px 4px;
  width: 100%;
  height: 82%;
  border-top: 1px solid ${color.LIGHT_GREY};
  border-bottom: 1px solid ${color.LIGHT_GREY};
`;

export default function MenuPage() {
  const createDummySong = () => ({ title: "Happy", coverImg: ExampleImg.HAPPY_COVER });
  const oneSong = new Array(1).fill(createDummySong());
  const threeSongs = new Array(3).fill(createDummySong());

  return (
    <>
      <Header leftIconType="ARROW_BACK" rightIconType="MENU">
        <Text size={12}>{content.SHORTCUT}</Text>
      </Header>
      <Grid>
        <CardView>
          <CardTitleWrapper>
            <Text size={13} bold={true}>
              {content.MY_PAGE}
            </Text>
            <Icon type="ARROW_FORWARD" />
          </CardTitleWrapper>
          <CardWrapper>
            <LittleTitleText size={12} bold={true}>
              {content.DIARY_I_WROTE}
            </LittleTitleText>
            <Grid>
              <DiaryItem />
            </Grid>
            <LittleTitleText size={12} bold={true}>
              {content.MUSIC_I_LISTENED}
            </LittleTitleText>
            <MusicList list={oneSong} />
          </CardWrapper>
        </CardView>

        <CardView>
          <CardTitleWrapper>
            <Text size={13} bold={true}>
              {content.TRENDING}
            </Text>
            <Icon type="ARROW_FORWARD" />
          </CardTitleWrapper>
          <CardSongWrapper>
            <MusicList list={threeSongs} />
          </CardSongWrapper>
        </CardView>
      </Grid>
    </>
  );
}
