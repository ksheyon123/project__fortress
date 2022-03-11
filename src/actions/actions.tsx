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

  let velocity = 5;
  let distance = 0;
  let gravity = -9.8;
  let iteration = 0;
  let time = 100;
  let deg = 0;
  const animate = setInterval(() => {
    // ctx.clearRect(x - r + moveSize, y - r - drop, 4, 4);
    distance += velocity;
    const moveX = x + distance;
    const maxHeight = Math.abs(Math.pow(velocity, 2) / (2 * gravity));

    // vt - (0.5)gt^2;
    // 
    const moveY = (-1) * ((velocity * time * iteration * 0.001) - (0.5 * gravity * time * time * iteration * 0.001 * 0.001));
    ctx.beginPath();
    ctx.arc(moveX, y - moveY, r, 0, Math.PI * 2, true);
    ctx.fillStyle = 'blue';
    ctx.fill();
    // if (moveX >= 400) {
    //   clearInterval(animate);
    //   // ctx.clearRect(x - r + moveSize, y - r - iteration, 20, 20);
    // }
    iteration++
  }, time);
}