const canvas = document.getElementById("js-main-canvas");

const drawClockFace = (ctx, radius) => {
  // Draw white background circle.
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.fillStyle = "white";
  ctx.fill();

  // Draw glow effect around the clock face.
  const gradient = ctx.createRadialGradient(
    0,
    0,
    radius * 0.95,
    0,
    0,
    radius * 1.05
  );
  gradient.addColorStop(0, "#333");
  gradient.addColorStop(0.5, "white");
  gradient.addColorStop(1, "#333");
  ctx.strokeStyle = gradient;
  ctx.lineWidth = radius * 0.1;
  ctx.stroke();

  // Draw clock center.
  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
  ctx.fillStyle = "#333";
  ctx.fill();
};

const drawClockNumbers = (ctx, radius) => {
  let angle;
  ctx.font = radius * 0.15 + "px arial";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";

  for (let num = 1; num <= 12; ++num) {
    angle = (num * Math.PI) / 6;
    ctx.rotate(angle);
    ctx.translate(0, -radius * 0.85);
    ctx.rotate(-angle);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(angle);
    ctx.translate(0, radius * 0.85);
    ctx.rotate(-angle);
  }
};

const drawClockHand = (ctx, angle, length, width) => {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.moveTo(0, 0);
  ctx.rotate(angle);
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.rotate(-angle);
};

const drawTime = (ctx, radius) => {
  const now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  // Set hour.
  hour = hour % 12;
  let angle =
    (hour * Math.PI) / 6 +
    (minute * Math.PI) / (6 * 60) +
    (second * Math.PI) / (6 * 3600);
  drawClockHand(ctx, angle, radius * 0.5, radius * 0.07);

  // Set minute.
  angle = (minute * Math.PI) / 30 + (second * Math.PI) / (30 * 60);
  drawClockHand(ctx, angle, radius * 0.8, radius * 0.07);

  // Set second.
  angle = (second * Math.PI) / 30;
  drawClockHand(ctx, angle, radius * 0.9, radius * 0.02);
};

const drawClock = (ctx, radius) => {
  drawClockFace(ctx, radius);
  drawClockNumbers(ctx, radius);
  drawTime(ctx, radius);
};

if (canvas.getContext) {
  const ctx = canvas.getContext("2d");
  ctx.translate(canvas.width / 2, canvas.height / 2);
  const radius = (canvas.height / 2) * 0.9;

  setInterval(() => drawClock(ctx, radius), 1000);
}
