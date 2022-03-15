import React, { useEffect, useRef, RefObject, useState, MouseEvent } from "react";
import styled from "styled-components";
import {
  useRecoilValue,
  useRecoilState
} from 'recoil';
import {
  unitLocationState,
} from "../../state/atom";
import {
  createMarble,
  setWindVelocity
} from "../../actions/actions";

const StyledCanvasWrapper = styled.div`
  overflow : hidden;
  width : 100vw;
  height : calc(100vh - 150px);
`;

const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>();

  const [canvasX, setCanvasX] = useState<number>(0);
  const [canvasY, setCanvasY] = useState<number>(0);

  const location = useRecoilValue(unitLocationState);

  console.log(location);

  const widthNum = 4000;
  const heightNum = 4000;

  const cellSize = 100;

  const canvasWidth = widthNum + "px"
  const canvasHeight = heightNum + "px";

  // 격자 무늬 그리기
  useEffect(() => {
    const ref: any = canvasRef.current;
    const ctx = ref.getContext("2d");
    for (var x = 0; x < widthNum; x += cellSize) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, heightNum);
    }

    for (var y = 0; y < heightNum; y += cellSize) {
      ctx.moveTo(0, y);
      ctx.lineTo(widthNum, y);
    }
    ctx.strokeStyle = "#ddd";
    ctx.stroke();
  }, [canvasRef]);

  // Set Unit Position;
  useEffect(() => {
    // setUnit({
    //   lookingDirection: 0,
    //   x: 50,
    //   y: 50
    // })
  }, []);

  // Draw Unit
  useEffect(() => {
    const {
      x, y
    } = location;
    const ref: any = canvasRef.current;
    const ctx = ref.getContext("2d");
    const r = 10;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2, true);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();
  }, [canvasRef, location]);

  // canvas drag & drop
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
        width={canvasWidth}
        height={canvasHeight}
        style={{
          backgroundColor: "#FFF",
          border: "3px solid #323232",
          marginBottom: 150,
          position: "relative",
          top: canvasY,
          left: canvasX
        }}>
      </canvas>
    </StyledCanvasWrapper>

  )
}

export { Canvas }