import { gridSpec, e1, e2 } from "../constants/field";
let ctx: any;
const {
  widthNum,
  heightNum,
  cellSize
} = gridSpec;

const draw = (x: number, y: number) => {
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
  unitBorder(position);

  // 상호작용 영역
  interactionArea(position);

  // 적 만들기
  draw(e1.x, e1.y);
  draw(e2.x, e2.y);
}

const unitBorder = (position: any) => {
  let startX = Math.floor(position.x / cellSize) * cellSize;
  let startY = Math.floor(position.y / cellSize) * cellSize;
  ctx.beginPath();
  ctx.rect(startX, startY, cellSize, cellSize)
  ctx.strokeStyle = "#323232";
  ctx.stroke();
  ctx.closePath();
}

const collisionCheck = (coordinate: any) => {

  let distance = 5;


}

const interactionArea = (position: any) => {

  const {
    x,
    y
  } = position;

  const curX = x;
  const curY = y;

  const boxStartX = Math.floor(x / cellSize) * cellSize;
  const boxStartY = Math.floor(y / cellSize) * cellSize;
  const boxEndX = boxStartX + cellSize;
  const boxEndY = boxStartY + cellSize;

  const curToStartX = Math.abs(curX - boxStartX);
  const curToEndX = Math.abs(curX - boxEndX);

  const curToStartY = Math.abs(curY - boxStartY);
  const curToEndY = Math.abs(curY - boxEndY);

  const orderArr = [{ id: 0, value: curToStartX }, { id: 1, value: curToEndX }, { id: 2, value: curToStartY }, { id: 3, value: curToEndY }];
  const t = orderArr.sort((a, b) => a.value - b.value);
  if (t[0].value !== t[1].value) {
    if (t[0].id === 0) {
      ctx.beginPath();
      ctx.rect(boxStartX - cellSize, boxStartY, cellSize, cellSize)
      ctx.strokeStyle = "red";
      ctx.stroke();
      ctx.closePath();
    }
    if (t[0].id === 1) {
      ctx.beginPath();
      ctx.rect(boxStartX + cellSize, boxStartY, cellSize, cellSize)
      ctx.strokeStyle = "red";
      ctx.stroke();
      ctx.closePath();
    }
    if (t[0].id === 2) {
      ctx.beginPath();
      ctx.rect(boxStartX, boxStartY - cellSize, cellSize, cellSize)
      ctx.strokeStyle = "red";
      ctx.stroke();
      ctx.closePath();
    }
    if (t[0].id === 3) {
      ctx.beginPath();
      ctx.rect(boxStartX, boxStartY + cellSize, cellSize, cellSize)
      ctx.strokeStyle = "red";
      ctx.stroke();
      ctx.closePath();
    }
  }
  distance({ x, y });
}

const distance = ({ x, y }: { x: number; y: number; }) => {
  let distance: number = 50;

  const isClose = Math.sqrt(Math.pow((x - e1.x), 2) + Math.pow((y - e1.y), 2)) < distance;
  console.log(isClose);
  if (isClose) {
    ctx.beginPath();
    ctx.arc(e1.x, e1.y, 20, 0, Math.PI * 2, true);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
  }

}