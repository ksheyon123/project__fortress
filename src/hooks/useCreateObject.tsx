import { useRecoilValue, useSetRecoilState, useRecoilState, useRecoilCallback } from "recoil";
import {
  unitCoordinateState
} from "../state/atom";
import {
  gridSpec
} from "../constants/field";
import { theme } from "../styles/theme";
let ctx: CanvasRenderingContext2D;

const {
  widthNum,
  heightNum,
  cellSize
} = gridSpec;

export const useCreateObject = () => {
  const coordinate = useRecoilValue(unitCoordinateState);
  const {
    x,
    y
  } = coordinate;

  const draw = (canvas: HTMLCanvasElement) => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 170;
    ctx = canvas.getContext("2d")!;
    ctx.clearRect(0, 0, canvas.width, canvas.width);
    const r = 20;
    ctx.beginPath();
    ctx.rect(x, y + window.innerHeight - 170 - r, r, r);
    ctx.fillStyle = theme.pixel;
    ctx.fill();
    ctx.closePath();
    // createGridTemplate();
  }

  return {
    draw
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