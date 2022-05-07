import { useRecoilValue } from "recoil";
import {
  unitCoordinateState
} from "../state/atom";
import { gridSpec } from "../constants/field"
import { theme } from "../styles/theme";

let ctx: CanvasRenderingContext2D;

export const useCreateObject = () => {
  const coordinate = useRecoilValue(unitCoordinateState);
  const {
    x,
    y
  } = coordinate;

  const {
    step
  } = gridSpec;

  const innerWidth = window.innerWidth;
  const innerHeight = window.innerHeight;

  // Reverse Y Coordinate 
  const boxSize = 50;
  const newX = x + innerWidth / 2;
  const newY = innerHeight - 70 - boxSize - y;

  const createCharacterArea = (canvas: HTMLCanvasElement) => {
    console.log(newX, newY, boxSize, boxSize)
    ctx = canvas.getContext("2d")!;
    ctx.clearRect(newX - step * 2, newY - step * 2, boxSize + step * 4, boxSize + step * 4);
    ctx.beginPath();
    ctx.rect(newX, newY, boxSize, boxSize);
    ctx.strokeStyle = "#000";
    ctx.stroke();
    ctx.closePath();
    // createGridTemplate();
  }

  return {
    createCharacterArea
  }
}