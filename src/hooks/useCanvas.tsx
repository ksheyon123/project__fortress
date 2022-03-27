import React from "react";
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import {
  unitLocationState
} from "../state/atom";
import {
  gridSpec
} from "../constants/field";
let prevX: number;
let prevY: number;
let ctx: any;

const {
  widthNum,
  heightNum,
  cellSize
} = gridSpec;


export const createMable = (position: any, canvas: any) => {
  ctx = canvas.getContext('2d');

  prevX = position.x;
  prevY = position.y;
  ctx.clearRect(0, 0, canvas.width, canvas.width);


  // Unit 만들기
  const r = 10;
  ctx.beginPath();
  ctx.arc(position.x, position.y, r, 0, Math.PI * 2, true);
  ctx.fillStyle = 'blue';
  ctx.fill();
  ctx.closePath();
  // 격자 무늬 그리기
  createGridTemplate()

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