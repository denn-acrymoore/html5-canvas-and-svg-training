const canvas = document.getElementById("js-main-canvas");
if (canvas.getContext) {
  const ctx = canvas.getContext("2d");

  // ======== Drawing Rectangle ========
  ctx.fillStyle = "#FF0000";
  // NOTE:
  // - fillRect(x, y, width, height);
  // - (0, 0) = Upper-left corner.
  ctx.fillRect(0, 0, 600, 300);

  ctx.fillStyle = "#00FF00";
  ctx.fillRect(50, 50, 100, 100);

  // ======== Drawing a Line ========
  ctx.strokeStyle = "#0000FF";
  ctx.lineWidth = 10;

  ctx.beginPath();
  ctx.moveTo(1920, 1080);
  ctx.lineTo(0, 0);
  ctx.stroke();

  // ======== Drawing a Circle ========
  // Note:
  // - arc(x, y, r, startangle, endangle)
  ctx.strokeStyle = "#332211";
  ctx.lineWidth = 20;
  ctx.beginPath();
  ctx.arc(1000, 600, 200, 0, 1.75 * Math.PI);
  ctx.stroke();

  // ======== Drawing Gradient ========
  // Note:
  // - createLinearGradient(x, y, x1, y1).
  // - createRadialGradient(x, y, r, x1, y1, r1).
  // - addColorStop(0-1, color).
  let gradient = ctx.createLinearGradient(810, 540, 910, 640);
  gradient.addColorStop(0, "#800020");
  gradient.addColorStop(1, "#ffdead");

  ctx.fillStyle = gradient;
  ctx.fillRect(810, 540, 100, 100);

  gradient = ctx.createRadialGradient(800, 200, 5, 1000, 800, 700);
  gradient.addColorStop(0, "#ff06b5");
  gradient.addColorStop(1, "#ffd700");

  ctx.fillStyle = gradient;
  ctx.fillRect(1000, 100, 500, 500);

  // ======== Drawing Text ========
  // Note:
  // - fillText(text, x, y).
  // - strokeText(test, x, y).
  ctx.font = "italic bold 70px Comic Sans";
  ctx.fillStyle = "#800020";
  ctx.fillText("Hello World", 20, 1000);

  ctx.font = "italic 130px Courier";
  ctx.strokeStyle = "#3333ff";
  ctx.lineWidth = 2;
  ctx.textAlign = "center";
  ctx.strokeText("Hi World!", canvas.width / 2, 800);
}
