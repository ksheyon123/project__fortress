import React, { useEffect, useRef, RefObject, useState, MouseEvent } from "react";
import styled from "styled-components";
import {
  useRecoilValue,
} from 'recoil';
import {
  unitCoordinateState,
} from "../../state/atom";
import {
  gridSpec,
} from "../../constants/field";
import {
  useCreateObject
} from "../../hooks/useCreateObject";
import { theme } from "../../styles/theme";

const StyledCanvasWrapper = styled.div`
display: flex;
justify-content: center;
  width : 100vw;
  height : calc(100vh - 172px);
  overflow: hidden;
`;

const View: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>();

  const [canvasX, setCanvasX] = useState<number>(0);
  const [canvasY, setCanvasY] = useState<number>(0);
  const coordinate = useRecoilValue(unitCoordinateState);

  const { createCharacterArea } = useCreateObject();

  // Draw Canvas
  useEffect(() => {
    const canvas: HTMLCanvasElement = canvasRef.current!;

  }, [canvasRef]);

  useEffect(() => {
    const canvas: HTMLCanvasElement = canvasRef.current!;
    createCharacterArea(canvas);
  }, [coordinate])

  useEffect(() => {
    const ref: any = canvasRef.current;
    let prevMouseX: number;
    let prevMouseY: number;
    ref.addEventListener("mousedown", (e: MouseEvent) => {
      const x = e.screenX;
      const y = e.screenY;
      prevMouseX = x;
      prevMouseY = y;
      console.log("MouseDown (x : " + x + ", y : " + y + ')');
    })

    ref.addEventListener("mouseup", (e: MouseEvent) => {
      const x = e.screenX;
      const y = e.screenY;
      const dx = prevMouseX - x;
      const dy = prevMouseY - y;

      if (canvasX - dx < 0) {
        setCanvasX(0);
      } else {
        setCanvasX(dx);
      }
      if (canvasY - dy < 0) {
        setCanvasY(0);
      } else {
        setCanvasY(dy);
      }
    })
  }, []);

  return (
    <StyledCanvasWrapper>
      <canvas
        ref={canvasRef as RefObject<HTMLCanvasElement>}
        id="game-screen"
        width={window.innerWidth}
        height={window.innerHeight - 170}
        style={{
          backgroundColor: theme.background,
        }}>
      </canvas>
    </StyledCanvasWrapper >

  )
}

export { View }