import React, { useCallback, useEffect, useState } from "react";
import {
  useRecoilState, useSetRecoilState
} from "recoil";
import styled from "styled-components";
import {
  rgbToHexConverter,
  hexToRgbConverter
} from "../../utils/index";
import {
  objectColorState
} from "../../state/atom";
import ic_switch from "../../assets/ic_switch.png";

type StyledProps = {
  colorSelected: string;
  isActive: boolean;
}

const StyledPallet = styled.div<StyledProps>`
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
      height : auto;
      box-shadow: 0px 3px 15px 0px rgba(32, 32, 32, 0.15);
      background-color: #FFF;
      padding : 10px;
      & .color-input {
        display : flex;
        justify-content: space-between;
        align-items: center;
        & > div {
          display : flex;
          & span {
            margin-right: 15px;
          }
          & input  {
            width :40px;
            height : 20px;
          }
        }
        & > img {
          width : 20px;
          height : 20px;
        }
      }
    }
  }
`;

const Pallet: React.FC = (props) => {
  const [showPallet, setShowPallet] = useState<boolean>(false);
  const [isHex, setIsHex] = useState<boolean>(false);
  const [color, setColor] = useRecoilState(objectColorState);
  const [rgb1, setRgb1] = useState<string>("255");
  const [rgb2, setRgb2] = useState<string>("255");
  const [rgb3, setRgb3] = useState<string>("255");

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

  useEffect(() => {
    setColor("#FFFFFF");
  }, []);

  useEffect(() => {
    if (!isHex) {
      const _rgb1 = parseInt(rgb1);
      const _rgb2 = parseInt(rgb2);
      const _rgb3 = parseInt(rgb3);
      const hex = rgbToHexConverter(_rgb1, _rgb2, _rgb3);
      setColor(hex);
    }

    if (isHex) {
      const result = hexToRgbConverter(color);
      if (!!result) {
        const {
          r,
          g,
          b,
        } = result;
        setRgb1(r);
        setRgb2(g);
        setRgb3(b);
      }
    }
  }, [color, rgb1, rgb2, rgb3]);

  return (
    <StyledPallet colorSelected={color} isActive={showPallet} >
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
                    onChange={(e) => setColor(e.target.value)} />
                  <span>{ }</span>
                </div>
              ) : (
                  <div>
                    <span>RGB</span>
                    <input
                      value={rgb1}
                      onChange={(e) => setRgb1(e.target.value)} />
                    <input
                      value={rgb2}
                      onChange={(e) => setRgb2(e.target.value)} />
                    <input
                      value={rgb3}
                      onChange={(e) => setRgb3(e.target.value)} />
                    <span>{ }</span>
                  </div>
                )
            }
            <img src={ic_switch}
              onClick={() => setIsHex(!isHex)}
              alt="icon_switch"
            />
          </div>
        </div>
      </div>
    </StyledPallet>
  )
}

export { Pallet }