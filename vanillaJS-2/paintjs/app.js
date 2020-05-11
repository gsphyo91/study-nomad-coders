const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const brushSize = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");

const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 500;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    if (!filling) {
      ctx.beginPath(); // Path를 생성
      ctx.moveTo(x, y); // 좌표를 이동
    }
  } else {
    if (!filling) {
      ctx.lineTo(x, y); //이전 좌표에서 현재 좌표까지의 라인을 생성
      ctx.stroke(); // 생성된 라인을 strokeStyle의 색으로 색칠
    }
  }
}

function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function handleBrushSize(event) {
  ctx.lineWidth = event.target.value;
}

function handleModeClick() {
  if (filling === true) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }
}

function handleCanvasClick() {
  if (filling) {
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  }
}

function handleContextMenu(event){
  event.preventDefault();
}

function handleSaveClick(event){
  const image = canvas.toDataURL("image/jpeg");
  const link = document.createElement("a");
  link.href = image; // image URL 적용
  link.download = "PaintJS[export]"; // 다운로드 파일 이름 설정
  link.click(); // 다운로드 실행
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
  canvas.addEventListener("contextmenu", handleContextMenu);
}

Array.from(colors).forEach((color) =>
  color.addEventListener("click", handleColorClick)
);

if (brushSize) {
  brushSize.addEventListener("input", handleBrushSize);
}

if (mode) {
  mode.addEventListener("click", handleModeClick);
}

if(saveBtn){
  saveBtn.addEventListener("click", handleSaveClick);
}