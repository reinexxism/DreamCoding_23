const horizon = document.querySelector(".horizon");
const vertical = document.querySelector(".vertical");
const cursor = document.querySelector(".cursor");
const currentAxis = document.querySelector(".currentAxis");

document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  console.log(`${x}, ${y}`);

  horizon.style.top = `${y}px`;
  vertical.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
  cursor.style.left = `${x}px`;
  currentAxis.style.top = `${y}px`;
  currentAxis.style.left = `${x}px`;
  currentAxis.innerHTML = `${x}px, ${y}px`;
});
