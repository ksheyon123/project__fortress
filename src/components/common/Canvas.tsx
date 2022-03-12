import React, { useEffect, useRef, RefObject, useState } from "react";
import {
  useRecoilValue,
  useRecoilState
} from 'recoil';
import {
  unitPositionState, windVelocityState,
} from "../../state/atom";
import {
  createMarble,
  setWindVelocity
} from "../../actions/actions";

const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>();
  const position = useRecoilValue(unitPositionState);

  const widthNum = 4000;
  const heightNum = 4000;

  const cellSize = 100;

  const canvasWidth = widthNum + "px"
  const canvasHeight = heightNum + "px";

  useEffect(() => {
    setInterval(() => {
      // setWindVelocity(-50)
    }, 5000);
  }, []);

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

  // 격자에 Object 배치하기
  useEffect(() => {
    const objectArr = [];
    const totalCell = 160;
    const animalCount = 15;
    const woodCount = 60;
    const wallCount = 30;
    const mud = 55;

  }, [canvasRef]);

  // Turret이 하늘에서 떨어져서 임의의 위치에 설정

  // useEffect(() => {
  //   createMarble(position, canvasRef.current);
  // }, [position, canvasRef]);

  // player Positioning
  useEffect(() => {
    const ref: any = canvasRef.current;
    const ctx = ref.getContext("2d");
    // ctx.clearRect(0, 0, widthNum, heightNum);
    const r = 10;
    ctx.beginPath();
    ctx.arc(50, 50, r, 0, Math.PI * 2, true);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();
  }, [canvasRef]);

  return (
    <canvas
      ref={canvasRef as RefObject<HTMLCanvasElement>}
      id="game-screen"
      width={canvasWidth}
      height={canvasHeight}
      style={{
        backgroundColor: "#FFF",
        border: "3px solid #323232",
        marginBottom: 150
      }}>
    </canvas>
  )
}

export { Canvas }