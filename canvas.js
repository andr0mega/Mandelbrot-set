const canvasElement = document.querySelector("#mandelbrot-canvas");
const ctx = canvasElement.getContext("2d");

export const initCanvas = () => {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
}

export const draw = () => {
    ctx.fillStyle = "black";
    ctx.fillRect( window.innerWidth - 200, 0, 100, 100 );
}