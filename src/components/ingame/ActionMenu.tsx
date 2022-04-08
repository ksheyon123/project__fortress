import React from "react";
import styled from "styled-components";
import { Logo } from "../common/index";
import { theme } from '../../styles/theme';
import rice from "../../assets/ic_rice.png";
import play from "../../assets/ic_play.png";
import sleep from "../../assets/ic_sleep.png";
import home from "../../assets/ic_home.png";

const StyledActionMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width : 100vw;
  height : 70px;
  background-color: ${theme.background};
  border-bottom: 1px solid ${theme.pixel};
`;

const ActionMenu: React.FC = () => {
  return (
    <StyledActionMenu>
      <Logo height={35} img={rice} />
      <Logo height={35} img={play} />
      <Logo img={sleep} />
      <Logo img={home} />
    </StyledActionMenu>
  )
}

export { ActionMenu };