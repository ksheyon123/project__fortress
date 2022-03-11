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

  const canvasWidth = window.screen.availWidth - 40 + "px";
  const canvasHeight = window.screen.availHeight - 300 + "px";

  useEffect(() => {
    setInterval(() => {
      setWindVelocity(-50)
    }, 5000);
  }, []);

  useEffect(() => {
    createMarble(position, canvasRef.current);
  }, [position, canvasRef]);

  return (
    <>
      <canvas
        ref={canvasRef as RefObject<HTMLCanvasElement>}
        id="game-screen"
        width={canvasWidth}
        height={canvasHeight}
        style={{
          margin: "20px",
          backgroundColor: "#FFF",
          border: "1px solid #323232"
        }}>
      </canvas>
    </>
  )
}

export { Canvas }