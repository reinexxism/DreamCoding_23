// 해결한 문제
// 1. mouse cursor의 현재 x, y 좌표를 실시간으로 알아내기
// 2. 그것을 browser화면상에 div 박스로 나타내기
// 3. div가 mouse cursor를 따라다니지 않음

// 해결되지 않는 문제
// 2. mouse cursor가 지정된 Img로 바뀌지 않음
// ->
// 3. 저 따라다니는 하얀 선(?) 뭔지 모르겠음 어케 하냐 진짜??

const pointer = document.getElementById("pointer");
const following = document.getElementById("following");
const horizontal = document.getElementById("lineHorizon");
const vertical = document.getElementById("lineVertical");

function showCurrentAxis(e) {
  pointer.innerText = `${e.clientX}px, ${e.clientY}px`;
}

function movePointer(e) {
  pointer.style.left = `${e.clientX + 30}px`;
  pointer.style.top = `${e.clientY + 20}px`;
}

function moveFollowing(e) {
  following.style.left = `${e.clientX - 40}px`;
  following.style.top = `${e.clientY - 40}px`;
}

function moveHorizon(e) {
  horizontal.style.left = `${e.clientX}px`;
}

function moveVertical(e) {
  vertical.style.top = `${e.clientY}px`;
}

document.addEventListener("mousemove", (e) => {
  showCurrentAxis(e);
  movePointer(e);
  moveFollowing(e);
  moveHorizon(e);
  moveVertical(e);
});
