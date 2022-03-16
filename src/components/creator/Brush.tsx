import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

import thick1 from "../../assets/thickness_1.png";
import thick2 from "../../assets/thickness_2.png";
import thick3 from "../../assets/thickness_3.png";
import thick4 from "../../assets/thickness_4.png";

const ImageSet = [
  thick1,
  thick2,
  thick3,
  thick4
]

type StyledProps = {
  isActive: boolean;
  imgNum: number;
}

const StyledBrush = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  width : 60px;
  height : 100%;
  & > div.brush-select {
    position : relative;
    width : 30px;
    height : 30px;
    border-radius: 50%;
    box-shadow: 0px 3px 15px 0px rgba(32, 32, 32, 0.3);
    background : ${props => `url(${ImageSet[props.imgNum]}) center center no-repeat`};
    ${props => props.isActive && `
    border-bottom-right-radius: 0%;
      border-bottom-left-radius: 0%;
    `}
    & .brush-list {
      position : absolute;
      display : none;
      flex-direction: column;
      align-items: center;
      top : 30px;
      width : 30px;
      height : auto;
      background-color : #FFF;
      box-shadow: 0px 3px 15px 0px rgba(32, 32, 32, 0.15);
      ${props => props.isActive && `
        display : flex;
      box-shadow: 0px 5px 5px 0px rgba(32, 32, 32, 0.15);
      `}
      & ul {
        list-style: none;
        padding : 0px;
        margin : 0px;
      }
    }
  }
`;

const Brush: React.FC = () => {
  const [showBrush, setShowBrush] = useState<boolean>(false);
  const [imgNum, setNum] = useState<number>(0);

  const handleOnClick = useCallback(() => {
    const dom1 = document.getElementsByClassName("brush-select")[0];
    const dom2 = document.getElementsByClassName("brush-list")[0];
    if (showBrush) {
      dom1.setAttribute("class", "brush-select");
      dom2.setAttribute("class", "brush-list");
    }

    if (!showBrush) {
      dom1.setAttribute("class", "brush-select active");
      dom2.setAttribute("class", "brush-list active");
    }
    setShowBrush(!showBrush)
  }, [showBrush]);

  return (
    <StyledBrush isActive={showBrush} imgNum={imgNum}>
      <div
        className="brush-select"
        onClick={() => handleOnClick()}
      >
        <div className="brush-list">
          <ul>
            <li onClick={() => setNum(0)}><img src={thick1} alt={"thickness_1"} /></li>
            <li onClick={() => setNum(1)}><img src={thick2} alt={"thickness_2"} /></li>
            <li onClick={() => setNum(2)}><img src={thick3} alt={"thickness_3"} /></li>
            <li onClick={() => setNum(3)}><img src={thick4} alt={"thickness_4"} /></li>
          </ul>
        </div>
      </div>

    </StyledBrush>
  )
}

export { Brush };