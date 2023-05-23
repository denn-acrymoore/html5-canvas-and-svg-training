/*
Testing ResizeObserver() dan Responsive Canvas dengan CSS.

NOTE: 
- Canvas sudah responsive dan tetap menjaga aspect ratio dengan bantuan CSS.
- ResizeObverver() di kode ini tidak mengubah apapun dan hanya menyebutkan borderBoxSize dan 
  contentRect.
*/
const canvas = document.getElementById("js-main-canvas");

if (canvas.getContext) {
  const ctx = canvas.getContext("2d");

  const resizeObserver = new ResizeObserver((entries) => {
    console.log(entries);

    for (let entry of entries) {
      if (entry.borderBoxSize) {
        // Standard format: borderBoxSize is an array.
        if (entry.borderBoxSize[0]) {
          console.log(
            "borderBoxSize[0].inlineSize",
            entry.borderBoxSize[0].inlineSize
          );
          console.log(
            "borderBoxSize[0].blockSize",
            entry.borderBoxSize[0].blockSize
          );
        } else {
          // Old Firefox version: borderBoxSize = Single item.
          console.log(
            "borderBoxSize.inlineSize",
            entry.borderBoxSize.inlineSize
          );
          console.log("borderBoxSize.blockSize", entry.borderBoxSize.blockSize);
        }
      }

      console.log("contentRect.width", entry.contentRect.width);
      console.log("contentRect.height", entry.contentRect.height);
    }
  });

  resizeObserver.observe(canvas);

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
}
