export const createMarble = (canvas: any) => {
  const ctx = canvas.getContext('2d');
  const x = 100;
  const y = 240;
  const r = 10;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2, true);
  ctx.fillStyle = 'blue';
  ctx.fill();
}

export const fire = (canvas: any) => {
  const ctx = canvas.getContext("2d");
  const x = 110;
  const y = 240;
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
    const moveX = x + dx;
    // vt - (0.5)gt^2;
    // 
    const moveY = y + dy
    ctx.clearRect(dx, dy, 20, 20);

    ctx.beginPath();
    ctx.arc(moveX, moveY, r, 0, Math.PI * 2, true);
    ctx.fillStyle = 'blue';
    ctx.fill();
    if (moveX >= 400) {
      clearInterval(animate);
      // ctx.clearRect(x - r + moveSize, y - r - iteration, 20, 20);
    }
    iteration++
  }, 30);
}