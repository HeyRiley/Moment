const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");

const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = "700";

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

const startPainting = (event) => {
  if (filling == false) {
    painting = true;
  }
};

function stopPainting() {
  painting = false;
}

function onMouseMove(event) {
  // console.log(event);
  const x = event.offsetX;
  const y = event.offsetY;
  // console.log(x,y);
  if (!painting) {
    //makeing path
    console.log("creating path in", x, y);
    ctx.beginPath(); //path를 시작한다.(Creat Path)
    ctx.moveTo(x, y); //path를 움직인다.(Start)
  } else {
    //drawing path : 내가 마우스를 움직이는 내내 실행된다.
    console.log("creating line in", x, y);
    ctx.lineTo(x, y); //이전위치에서 현재위치까지 선을 만든다.(End)
    ctx.stroke(); //선을 긋는다.(Draw)
  }
}

function handleCanvasClick() {
  if (filling) {
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  }
}

function handleCM(event) {
  event.preventDefault(); //우클릭 안되게!
}

// canvas가 있으면
if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
  canvas.addEventListener("contextmenu", handleCM);
}

//>>  handle Color!
// : 색상을 클릭하면 선색,페인트색을 선택한 색상으로 바꿔준다
function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  console.log(color);
  ctx.strokeStyle = color; //override
  ctx.fillStyle = color;
}

//@@ console.log(Array.from(colors));
// color가 있으면
if (colors) {
  Array.from(colors).forEach((color) =>
    color.addEventListener("click", handleColorClick)
  );
}

//>> handle Range!
function handleRangeChange(event) {
  // console.log(event);
  // console.log(event.target.value);
  const size = event.target.value;
  ctx.lineWidth = size; //override
}

// range가 있으면
if (range) {
  range.addEventListener("input", handleRangeChange);
}

//>> Fill using fillRect
function handleModeClick(event) {
  if (filling === true) {
    filling = false; // 페인트 모드 일때 => 버튼 문구 필로바꿈
    mode.innerText = "Fill";
  } else {
    filling = true; // 필일때 모드 일때 => 버튼 문구 페인트로 바꿈
    mode.innerText = "Paint";
  }
}

if (mode) {
  mode.addEventListener("click", handleModeClick);
}

function handleSaveImage() {
  const image = canvas.toDataURL("image/png"); //jpeg or png
  // console.log(image);
  const link = document.createElement("a");
  link.href = image;
  link.download = "PaintJS[EXPORT]";
  console.log(link);
  link.click();
}

if (saveBtn) {
  saveBtn.addEventListener("click", handleSaveImage);
}
