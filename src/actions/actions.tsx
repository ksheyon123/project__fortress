
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

export const fire = (degree: number, position: any) => {
  const r = 2;
  let pow = 10;
  let velocity = 50;
  let gravity = -9.8;
  let iteration = 0;
  let time = 100;
  let radian = degree * (-1);
  let deg = 180 / Math.PI;
  const {
    isForward,
    x,
    y
  } = position;
  const animate = setInterval(() => {
    const vx = pow + Math.cos(radian / deg) * velocity;
    const vy = pow + Math.sin(radian / deg) * velocity;

    const _dx = vx * iteration * time * 0.001;

    const dx = isForward ? _dx : (-1) * _dx;
    const dy = vy * iteration * time * 0.001 - (0.5) * gravity * Math.pow((iteration * time * 0.001), 2);
    const moveX = x + dx;
    // vt - (0.5)gt^2;
    // 
    const moveY = y + dy

    ctx.beginPath();
    // ctx.arc(moveX, moveY, r, 0, Math.PI * 2, true);
    ctx.arc(moveX, moveY, r, 0, Math.PI * 2, false);

    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();
    iteration++
  }, 30);
}