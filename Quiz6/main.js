const horizon = document.querySelector(".horizon");
const vertical = document.querySelector(".vertical");
const cursor = document.querySelector(".cursor");
const currentAxis = document.querySelector(".currentAxis");

addEventListener("load", () => {
  const cursorRect = cursor.getBoundingClientRect();
  const cursorHalfWidth = cursorRect.width / 2;
  const cursorHalfHeight = cursorRect.height / 2;

  document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    horizon.style.transform = `translateY(${y}px)`;
    vertical.style.transform = `translateX(${x}px)`;
    cursor.style.transform = `translate(${x - cursorHalfWidth}px, ${
      y - cursorHalfHeight
    }px)`;
    currentAxis.style.transform = `translate(${x}px, ${y}px)`;
    currentAxis.style.transform = `translate(${x + 20}px, ${y + 20}px)`;
    currentAxis.innerHTML = `${x}px, ${y}px`;
  });
});
