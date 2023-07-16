const canvas: HTMLCanvasElement | null = document.querySelector<HTMLCanvasElement>("#canvas1");

canvas!.width = window.innerWidth;
canvas!.height = window.innerHeight;
canvas!.style.background = "black";

const ctx = canvas!.getContext("2d");
ctx!.fillStyle = "white";
ctx!.textAlign = "center";
ctx!.textBaseline = "middle";
ctx!.font = "Normal 50px Impact";
ctx!.fillText("hazadus", canvas!.width / 2, canvas!.height / 2);
