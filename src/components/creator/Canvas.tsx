import React, { useEffect, useRef, RefObject } from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  width : 100%;
  height : calc(100% - 60px);
  box-sizing: border-box;
  padding : 15px;
`;

const StyledCanvas = styled.div`
  width : 100%;
  height : 100%;
  background-color : transparent;
`;

const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>();

  // 색상을 넣을 grid 영역 지정
  const gridLayout = [];
  const canvasWidth = "300px";
  const canvasHeight = "500px";
  useEffect(() => {

  }, []);

  return (
    <StyledWrapper>
      <StyledCanvas>
        <canvas
          ref={canvasRef as RefObject<HTMLCanvasElement>}
          id="game-screen"
          width={canvasWidth}
          height={canvasHeight}
        >
        </canvas>
      </StyledCanvas>
    </StyledWrapper>
  )
}

export { Canvas }