const startBtn = document.querySelector(".startBtn");

startBtn.addEventListener("click", () => {
  window.scrollTo(438, 1187);
});

// 토끼의 위치를 찾기!
const rabbit = document.querySelector(".rabbit");
rabbit.addEventListener("click", (e) => {
  console.log(`${e.pageX}, ${e.pageY}`);
});
