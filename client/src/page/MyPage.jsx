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

const CardWrapper = styled.div`
  padding: 14px 4px 4px 4px;
  width: 100%;
  height: 82%;
  border-top: 1px solid ${color.LIGHT_GREY};
`;

export default function MenuPage() {
  const createDummySong = () => ({ title: "Happy", coverImg: ExampleImg.HAPPY_COVER });
  const threeSongs = new Array(3).fill(createDummySong());

  return (
    <>
      <Header leftIconType="ARROW_BACK" rightIconType="MENU">
        <Text size={12}>{content.MY_PAGE}</Text>
      </Header>
      <Grid>
        <CardView>
          <CardTitleWrapper>
            <Text size={13} bold={true}>
              {content.DIARY_I_WROTE}
            </Text>
            <Icon type="ARROW_FORWARD" />
          </CardTitleWrapper>
          <CardWrapper>
            <DiaryItem />
            <DiaryItem />
          </CardWrapper>
        </CardView>

        <CardView>
          <CardTitleWrapper>
            <Text size={13} bold={true}>
              {content.MUSIC_I_LISTENED}
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
