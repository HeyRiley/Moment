const body = document.querySelector('body');
const IMG_NUM = 3;

function paintImage(imgNum) {
    const img = new Image();
    img.src = `images/${imgNum}.jpg`;
    img.classList.add('bgImage');
    body.appendChild(img);
}

function genRandomNum() {
    const num = Math.ceil(Math.random() * IMG_NUM);
    return num
}

function init() {
    //랜덤 숫자 생성
    const randomNum = genRandomNum();
    const SET_SEC = 20;
    //페인트 이미지 함수
    paintImage(randomNum);
    setInterval(() => {
        paintImage(genRandomNum());
    }, 1000*SET_SEC);

}

init();