import React, { useCallback, useEffect, useState } from "react";
import {
  useRecoilState
} from "recoil";
import styled from "styled-components";
import ic_switch from "../../assets/ic_switch.png";

const StyledPallet = styled.div<{ colorSelected: string; isActive: boolean; isHex: boolean; }>`
  display: flex;
  align-items: center;
  width : 60px;
  height : 100%;

  & > div.color-select {
    position : relative;
    width : 30px;
    height : 30px;
    border-radius: 50%;
    background-color: ${props => props.colorSelected};
    box-shadow: 0px 3px 15px 0px rgba(32, 32, 32, 0.3);
    & .color-pallet {
      position : relative;
      display : ${props => props.isActive ? "block" : "none"};
      top : 40px;
      width : 240px;
      height : 300px;
      box-shadow: 0px 3px 15px 0px rgba(32, 32, 32, 0.15);
      background-color: #FFF;
      padding : 10px;
      & .color-input {
        display : flex;

        & > div {
          display : flex;
          & input  {
            width :40px;
            height : 20px;
          }
        }
      }
    }
  }

  
`;

const Pallet: React.FC = (props) => {
  const [showPallet, setShowPallet] = useState<boolean>(false);
  const [isHex, setIsHex] = useState<boolean>(false);
  const [color, setColor] = useState<string>("#FFF");

  // Source 간단하게?
  const handleOnClick = useCallback(() => {
    const pallet = document.getElementById("color-pallet");
    if (showPallet) {
      pallet?.setAttribute("class", "color-pallet");
    }

    if (!showPallet) {
      pallet?.setAttribute("class", 'color-pallet active');
    }
    setShowPallet(!showPallet);
  }, [showPallet]);

  const handleOnChange = (key: string, value: string) => {
    if (key) {

    }
  }

  return (
    <StyledPallet colorSelected={color} isActive={showPallet} isHex={isHex}>
      <div
        className="color-select"
        onClick={() => handleOnClick()}
      >
        <div
          id="color-pallet"
          className="color-pallet"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div
            className="color-picker"
          >
            {
              // Color Picker는 나중에
            }
          </div>
          <div className="color-input">
            {
              isHex ? (

                <div>
                  <span>HEX</span>
                  <input
                    value={color}
                    onChange={(e) => handleOnChange("hex", e.target.value)} />
                  <span>{ }</span>
                </div>
              ) : (
                  <div>
                    <span>RGB</span>
                    <input
                      value={color}
                      onChange={(e) => handleOnChange("rgb1", e.target.value)} />
                    <input
                      value={color}
                      onChange={(e) => handleOnChange("rgb2", e.target.value)} />
                    <input
                      value={color}
                      onChange={(e) => handleOnChange("rgb3", e.target.value)} />
                    <span>{ }</span>
                  </div>
                )
            }
            <img src={ic_switch}
              onClick={() => setIsHex(!isHex)}
              style={{
                width: 20,
                height: 20
              }}
              alt="icon_switch"
            />
          </div>
        </div>
      </div>
    </StyledPallet>
  )
}

export { Pallet }