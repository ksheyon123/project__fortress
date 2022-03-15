
let ctx: any;
let windVelocity: number = 0;

export const setWindVelocity = (velocity: number) => {
  windVelocity = velocity;
}

export const createMarble = (position: any, canvas: any) => {
  ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const r = 10;
  ctx.beginPath();
  ctx.arc(position.x, position.y, r, 0, Math.PI * 2, true);
  ctx.fillStyle = 'blue';
  ctx.fill();
  ctx.closePath();
}