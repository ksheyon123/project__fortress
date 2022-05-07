import React, { useState } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { interactionState } from "../../state/atom";
import { } from "../../state/atom";
import { Logo } from "../common/index";
import { theme } from '../../styles/theme';
import menu from "../../assets/ic_hamburger.png";
import play from "../../assets/ic_play.png";
import sleep from "../../assets/ic_sleep.png";
import home from "../../assets/ic_home.png";

const StyledActionMenu = styled.div`
  width : 100vw;
  height : ${theme.headerHeight};
  background-color: ${theme.mono100};
  & > div.menu-area {
    display: flex;
    justify-content: center;
    align-items: center;
    width : 60px;
    height : 100%;
  }
`;

const ActionMenu: React.FC = () => {

  const [toggle, setToggle] = useState<boolean>(false);
  const [isActive, setIsActive] = useRecoilState(interactionState);

  return (
    <StyledActionMenu>
      <div className="menu-area">
        <Logo height={35} img={menu} handleOnClick={() => setToggle(!toggle)} />
      </div>
    </StyledActionMenu>
  )
}

export { ActionMenu };