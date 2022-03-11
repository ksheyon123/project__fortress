import React, { useEffect, useRef, RefObject } from "react";
import {
  useRecoilValue
} from 'recoil';
import {
  unitPositionState
} from "../../state/atom";
import {
  createMarble,
  fire
} from "../../actions/actions";

const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>();
  const position = useRecoilValue(unitPositionState);

  useEffect(() => {
    createMarble(position, canvasRef.current);
  }, [position, canvasRef]);

  const handleOnFire = () => {
    fire(position, canvasRef.current);
  }

  return (
    <>
      <canvas
        ref={canvasRef as RefObject<HTMLCanvasElement>}
        id="game-screen"
        width="1440px"
        height="800px"
        style={{
          margin: "20px",
          backgroundColor: "#EBEBEB",
          borderBottom: "1px solid #323232"
        }}>
      </canvas>
      <button onClick={() => handleOnFire()}>Fire!</button>
    </>
  )
}

export { Canvas }