import { useRecoilValue, useSetRecoilState, useRecoilState, useRecoilCallback } from "recoil";
import {
  unitCoordinateState
} from "../state/atom";
import {
  gridSpec
} from "../constants/field";

let ctx: CanvasRenderingContext2D;

const {
  widthNum,
  heightNum,
  cellSize
} = gridSpec;


export function useCanvas() {
  const [coordinate, setCoordinate] = useRecoilState(unitCoordinateState);

  console.log(coordinate);

  const enemy = {
    x: 120,
    y: 240,
    r: 10
  }

  // Unit 만들기

  // 격자 무늬 그리기
  // createGridTemplate()



  const draw = (canvas: HTMLCanvasElement) => {
    ctx = canvas.getContext("2d")!;
    const {
      x,
      y
    } = coordinate;
    ctx.clearRect(0, 0, canvas.width, canvas.width);
    const r = 10;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2, true);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();
    createGridTemplate();
    drawMonster(canvas);
  }

  const drawMonster = (canvas: HTMLCanvasElement) => {
    ctx = canvas.getContext("2d")!;
    ctx.beginPath();
    ctx.arc(enemy.x, enemy.y, enemy.r, 0, Math.PI * 2, true);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
  }

  const collision = () => {
    const {
      x,
      y,
      lookingDirection
    } = coordinate;
    console.log("lookingDirection", lookingDirection, "x ", x);
    // 전진
    if (lookingDirection === 0) {
      return (x + 5) === (enemy.x - 5);
    }

    if (lookingDirection === 1) {
      return (x - 5) === (enemy.x + 5);
    }
    // 아래로
    if (lookingDirection === 3) {
      return (y + 5) === (enemy.y - 5);
    }

    if (lookingDirection === 2) {
      return (y - 5) === (enemy.y + 5);
    }
  }

  return {
    setCoordinate,
    coordinate,
    collision,
    draw
  }
}

const createGridTemplate = () => {
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