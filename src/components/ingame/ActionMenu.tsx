import React, { useState } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { interactionState } from "../../state/atom";
import { Drawer, Logo } from "../common/index";
import { theme } from '../../styles/theme';

import rice from "../../assets/ic_rice.png";

const StyledActionMenu = styled.header`
  display: flex;
  width : 100vw;
  height : ${theme.headerHeight};
  background-color: ${theme.mono100};
  & > div.interaction-area {
    display :flex;
    justify-content: flex-end;
    width : 100%;
    & > div.content-list {
    width : 60%;
      display: grid;
      grid-template-columns: repeat(3, 33%);
    }
  }
`;

const ActionMenu: React.FC = () => {

  const [isActive, setIsActive] = useRecoilState(interactionState);

  return (
    <StyledActionMenu>
      <Drawer list={[]} />
      <div className="interaction-area">
        <div className="content-list">
          <Logo width={30} img={rice} handleOnClick={() => setIsActive("feed")} />
          <Logo width={30} img={rice} />
          <Logo width={30} img={rice} />
        </div>
      </div>
    </StyledActionMenu>
  )
}

export { ActionMenu };