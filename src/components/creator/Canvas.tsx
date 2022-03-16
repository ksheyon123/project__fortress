import React, { useEffect, useRef, RefObject } from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  width : 100%;
  height : calc(100% - 60px);
  box-sizing: border-box;
  padding : 15px;
`;

const StyledCanvas = styled.div`
display : flex;
justify-content: center;
align-items: center;
  width : 100%;
  height : 100%;
  background-color : transparent;
`;

const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>();

  // 색상을 넣을 grid 영역 지정
  const gridLayout = [];
  const canvasWidth = "300px";
  const canvasHeight = "300px";

  const getCursorPosition = (e: MouseEvent) => {
    const ref: any = canvasRef.current;
    const rect = ref.getBoundingClientRect();
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    console.log("x: " + x + " y: " + y)
  }

  useEffect(() => {
    const ref: any = canvasRef.current;
    const ctx: any = ref.getContext("2d");
  }, []);

  return (
    <StyledWrapper>
      <StyledCanvas>
        <canvas
          ref={canvasRef as RefObject<HTMLCanvasElement>}
          id="game-screen"
          width={canvasWidth}
          height={canvasHeight}
          onClick={(e: any) => {
            getCursorPosition(e)
          }}
          style={{
            border: "1px solid #EBEBEB"
          }}
        >
        </canvas>
      </StyledCanvas>
    </StyledWrapper>
  )
}

export { Canvas }