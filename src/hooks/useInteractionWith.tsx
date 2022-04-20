import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { interactionState } from "../state/atom";
import rice from "../assets/ic_rice.png";
let ctx: CanvasRenderingContext2D;

export const useInteractionWith = () => {
  const [interaction, setInteraction] = useRecoilState(interactionState);
  const [isActive, setIsActive] = useState<boolean>(false);
  const innerWidth = window.innerWidth;
  const innerHeight = window.innerHeight;

  const boxSize = 50;

  const newY = innerHeight - 70 - boxSize;

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
    let idx = 1;

    if (isActive) {
      const intervalId = setInterval(() => {
        ctx.clearRect(innerWidth / 3, newY, boxSize + 1, idx * 15);
        if (idx === 4) {
          setInteraction("normal");
          setIsActive(false);
        }
        idx++;
      }, 1000);

      return () => clearInterval(intervalId)
    }
  }, [isActive]);

  const handleUpdate = () => {
    const _img = new Image();
    _img.src = rice;
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    ctx.beginPath();
    ctx.drawImage(_img, innerWidth / 3, newY, 50, 45)
    ctx.closePath();
    setIsActive(true);
  }

  return {
    setContext
  }
}