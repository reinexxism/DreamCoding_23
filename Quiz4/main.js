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
