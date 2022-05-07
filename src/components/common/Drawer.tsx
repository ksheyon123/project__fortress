import React, { useState } from "react";
import styled from "styled-components";
import { Logo } from "./Logo";
import { theme } from "../../styles/theme";
import menu from "../../assets/ic_hamburger.png";
import logout from "../../assets/ic_logout.png";
import close from "../../assets/ic_close.png";
import { DrawerType } from "../../constants/types";

interface IProps {
  list: DrawerType[];
}

const StyledDrawer = styled.div<{ isActive: boolean; }>`
  height : 100%;
  & > div.drawer-area {
    display: flex;
    justify-content: center;
    align-items: center;
    width : 60px;
    height : 100%;
  }
  & > div.drawer-content {
    position : absolute;
    top :0;
    width : ${props => props.isActive ? "calc(100% - 40px)" : "0px"};
    height : 100%;
    background-color: ${theme.mono100};
    border-right : 1px solid ${theme.primaryBorderColor};
    & > div.drawer-on-area {
      display: flex;
      justify-content: center;
      align-items: center;
      width : 60px;
      height : 70px;
    }
    & > div.logout {
      position: absolute;
      width : 100%;
      bottom :0px;
      & > div {
        width : 100%;
        display : flex;
        justify-content: flex-end;
        align-items: center;
        padding :10px;
        & > span {
          margin-right : 10px;
        }
      }
    }
  }
`;

const Drawer: React.FC<IProps> = (props) => {

  const {
    list
  } = props;

  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <StyledDrawer isActive={toggle}>
      <div className="drawer-area">
        <Logo width={30} img={menu} handleOnClick={() => setToggle(true)} />
      </div>
      {toggle && (
        <div className="drawer-content">
          <div className="drawer-on-area">
            <Logo width={25} height={25} img={close} handleOnClick={() => setToggle(false)} />
          </div>
          <ul>
            {
              list.map((el: DrawerType, idx: number) => {
                const {
                  name
                } = el;
                return (
                  <li>
                    {name}
                  </li>
                )
              })
            }
          </ul>
          <div className="logout">
            <div>
              <span>Logout</span>
              <Logo width={30} img={logout} handleOnClick={() => window.location.href = "/login"} />
            </div>
          </div>
        </div>
      )}
    </StyledDrawer>
  )
}

export { Drawer }