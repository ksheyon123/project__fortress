

export const createMarble = (position: any, canvas: any) => {
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const r = 10;
  ctx.beginPath();
  ctx.arc(position.x, position.y, r, 0, Math.PI * 2, true);
  ctx.fillStyle = 'blue';
  ctx.fill();
  ctx.closePath();
}

export const fire = (position: any, canvas: any) => {
  const ctx = canvas.getContext("2d");
  const r = 2;
  let velocity = 50;
  let gravity = -9.8;
  let iteration = 0;
  let time = 100;
  let radian = 45 * (-1);
  let deg = 180 / Math.PI;
  const animate = setInterval(() => {
    const vx = Math.cos(radian / deg) * velocity;
    const vy = Math.sin(radian / deg) * velocity;

    const dx = vx * iteration * time * 0.001;
    const dy = vy * iteration * time * 0.001 - (0.5) * gravity * Math.pow((iteration * time * 0.001), 2);
    const moveX = position.x + dx;
    // vt - (0.5)gt^2;
    // 
    const moveY = position.y + dy

    ctx.beginPath();
    ctx.arc(moveX, moveY, r, 0, Math.PI * 2, true);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();
    iteration++
  }, 30);
}