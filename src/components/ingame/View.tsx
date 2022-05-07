import React, { useEffect, useRef, RefObject, useState, MouseEvent, MouseEventHandler } from "react";
import styled from "styled-components";
import {
  useRecoilValue,
} from 'recoil';
import {
  unitCoordinateState,
} from "../../state/atom";
import {
  useCreateObject
} from "../../hooks/useCreateObject";
import {
  useInteractionWith
} from "../../hooks/useInteractionWith";
import { theme } from "../../styles/theme";

const StyledCanvasWrapper = styled.div`
display: flex;
justify-content: center;
  width : 100vw;
  height : calc(100vh - 72px);
  overflow: hidden;
`;

const View: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>();
  const coordinate = useRecoilValue(unitCoordinateState);

  const { createCharacterArea } = useCreateObject();
  const { setContext } = useInteractionWith();

  useEffect(() => {
    const canvas: HTMLCanvasElement = canvasRef.current!;
    createCharacterArea(canvas);
  }, [coordinate]);

  useEffect(() => {
    setContext(canvasRef.current!);
  }, [canvasRef]);

  useEffect(() => {
    const ref: HTMLCanvasElement = canvasRef.current!;
    ref.addEventListener("mousedown", (evt: any) => {
      const x = evt.nativeEvent.offsetX;
      const y = evt.nativeEvent.offsetX;
    })
  }, []);

  return (
    <StyledCanvasWrapper>
      <canvas
        ref={canvasRef as RefObject<HTMLCanvasElement>}
        id="game-screen"
        width={window.innerWidth}
        height={window.innerHeight - 70}
        style={{
          backgroundColor: theme.mono100,
        }}>
      </canvas>
    </StyledCanvasWrapper >

  )
}

export { View }