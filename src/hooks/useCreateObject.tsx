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
  const newY = innerHeight - 170 - boxSize - y;

  console.log(newX, newY, newX + 1, newY + 1);

  const createCharacterArea = (canvas: HTMLCanvasElement) => {
    ctx = canvas.getContext("2d")!;
    ctx.clearRect(newX - step - step, newY - step - step, boxSize + step + step, boxSize + step + step);
    ctx.beginPath();
    ctx.rect(newX, newY, boxSize, boxSize);
    ctx.strokeStyle = "#ddd";
    ctx.stroke();
    ctx.closePath();
    // createGridTemplate();
  }

  return {
    createCharacterArea
  }
}

// const createGridTemplate = () => {
//   for (var x = 0; x < widthNum; x += cellSize) {
//     ctx.moveTo(x, 0);
//     ctx.lineTo(x, heightNum);
//   }

//   for (var y = 0; y < heightNum; y += cellSize) {
//     ctx.moveTo(0, y);
//     ctx.lineTo(widthNum, y);
//   }
//   ctx.strokeStyle = "#ddd";
//   ctx.stroke();
// }