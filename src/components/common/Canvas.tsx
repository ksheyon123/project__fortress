import React, { useEffect, useRef, RefObject } from "react";
import {
  createMarble,
  fire
} from "../../actions/actions";

const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>();

  useEffect(() => {
    createMarble(canvasRef.current);
  }, [canvasRef]);

  const handleOnFire = () => {
    fire(canvasRef.current);
  }

  return (
    <>
      <canvas
        ref={canvasRef as RefObject<HTMLCanvasElement>}
        id="game-screen" width="800px" height="600px">

      </canvas>
      <button onClick={() => handleOnFire()}>Fire!</button>
    </>
  )
}

export { Canvas }