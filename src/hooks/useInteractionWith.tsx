import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { interactionState } from "../state/atom";
import { ActionProps } from "../constants/types";

let ctx: CanvasRenderingContext2D;

export const useInteractionWith = () => {
  const [interaction, setInteraction] = useRecoilState(interactionState);
  const [isActive, setIsActive] = useState<boolean>(false);
  const innerWidth = window.innerWidth;
  const innerHeight = window.innerHeight;

  const setContext = (canvas: HTMLCanvasElement) => {
    ctx = canvas.getContext("2d")!;
  }

  // get interaction params to update screen;
  useEffect(() => {
    if (interaction !== "normal") {
      handleUpdate();
    }
  }, [interaction]);

  useEffect(() => {
    let idx = 0;

    if (isActive) {
      const intervalId = setInterval(() => {
        if (idx === 4) {
          setInteraction("normal");
          setIsActive(false);
        }
        ctx.clearRect(innerWidth / 2, 0, 100, idx * 25);
        idx++;
      }, 1000);

      return () => clearInterval(intervalId)
    }
  }, [isActive]);

  const handleUpdate = () => {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    ctx.beginPath();
    ctx.fillRect(innerWidth / 2, 0, 100, 100);
    ctx.fillStyle = "#323232"
    ctx.closePath();
    setIsActive(true);
  }

  return {
    setContext
  }
}