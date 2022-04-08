import { useRecoilValue } from "recoil";
import {
  unitCoordinateState
} from "../state/atom";
import { theme } from "../styles/theme";
let ctx: CanvasRenderingContext2D;

export const useCreateObject = () => {
  const coordinate = useRecoilValue(unitCoordinateState);
  const {
    x,
    y
  } = coordinate;

  const createObj = (canvas: HTMLCanvasElement) => {
    ctx = canvas.getContext("2d")!;
    ctx.clearRect(0, 0, canvas.width, canvas.width);
    const r = 20;
    ctx.beginPath();
    ctx.rect(window.innerWidth / 2 - x, y + window.innerHeight - 170 - r, r, r);
    ctx.fillStyle = theme.pixel;
    ctx.fill();
    ctx.closePath();
    // createGridTemplate();
  }

  return {
    createObj
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