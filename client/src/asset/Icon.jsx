import React from "react";
import { Menu } from "@styled-icons/boxicons-regular/Menu";
import { ArrowBack } from "@styled-icons/boxicons-regular/ArrowBack";
import { Cross } from "@styled-icons/entypo/Cross";
import { Play } from "@styled-icons/boxicons-regular/Play";
import { Pause } from "@styled-icons/boxicons-regular/Pause";
import { FastForward } from "@styled-icons/boxicons-regular/FastForward";
import { Rewind } from "@styled-icons/boxicons-regular/Rewind";
import styled from "styled-components";

const iconProps = (size) => `
  display: block;
  width: ${size}px
  height: ${size}px;
`;

const MenuIcon = styled(Menu)`
  ${iconProps((props) => props.size)}
`;

const ArrowBackIcon = styled(ArrowBack)`
  ${iconProps((props) => props.size)}
`;

const CrossIcon = styled(Cross)`
  ${iconProps((props) => props.size)}
`;

const PlayIcon = styled(Play)`
  ${iconProps((props) => props.size)}
`;

const PauseIcon = styled(Pause)`
  ${iconProps((props) => props.size)}
`;

const FastForwardIcon = styled(FastForward)`
  ${iconProps((props) => props.size)}
`;

const RewindIcon = styled(Rewind)`
  ${iconProps((props) => props.size)}
`;

const Nothing = styled.div`
  ${iconProps((props) => props.size)}
`;

export default function Icon({ type = "NOTHING", onClick, size = 20 }) {
  switch (type) {
    case "MENU":
      return <MenuIcon className size={size} onClick={onClick} />;
    case "ARROW_BACK":
      return <ArrowBackIcon className size={size} onClick={onClick} />;
    case "X":
      return <CrossIcon className size={size} onClick={onClick} />;
    case "PLAY":
      return <PlayIcon className size={size} onClick={onClick} />;
    case "PAUSE":
      return <PauseIcon className size={size} onClick={onClick} />;
    case "FAST_FORWARD":
      return <FastForwardIcon className size={size} onClick={onClick} />;
    case "REWIND":
      return <RewindIcon className size={size} onClick={onClick} />;
    case "NOTHING":
      return <Nothing className size={size} onClick={onClick} />;
    default:
      return null;
  }
}
