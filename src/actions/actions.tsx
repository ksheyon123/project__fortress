import { gridSpec } from "../constants/field";
let ctx: any;
const {
  widthNum,
  heightNum,
  cellSize
} = gridSpec;

export const draw = (canvas: HTMLCanvasElement, x: number, y: number) => {
  ctx = canvas.getContext("2d")!;
  const r = 10;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2, true);
  ctx.fillStyle = 'blue';
  ctx.fill();
  ctx.closePath();
}

export const createGridTemplate = () => {
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
}