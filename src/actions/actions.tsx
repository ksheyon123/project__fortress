import { gridSpec } from "../constants/field";

let ctx: any;
const {
  widthNum,
  heightNum,
  cellSize
} = gridSpec;

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

export const createMarble = (position: any, canvas: any) => {
  ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);



  // Unit 만들기
  const r = 10;
  ctx.beginPath();
  ctx.arc(position.x, position.y, r, 0, Math.PI * 2, true);
  ctx.fillStyle = 'blue';
  ctx.fill();
  ctx.closePath();
  // 격자 무늬 그리기
  createGridTemplate()

  // 강조
  emphasizeUnitBorder(position);
}

const emphasizeUnitBorder = (position: any) => {
  console.log(position.x);
  let startX = Math.floor(position.x / 100) * 100;
  let startY = Math.floor(position.y / 100) * 100;
  ctx.beginPath();
  ctx.rect(startX, startY, 100, 100)
  ctx.strokeStyle = "#323232";
  ctx.stroke();
  ctx.closePath();
}