const scr = document.getElementById("screen");
const out = document.getElementById("outer");
const inn = document.getElementById("inner");
const cli = document.getElementById("client");

window.addEventListener("resize", showWindowsize);
function showWindowsize() {
  scr.innerText = `${window.screen.availWidth}, ${window.screen.availHeight}`;
  out.innerText = `${window.outerWidth}, ${window.outerHeight}`;
  inn.innerText = `${window.innerWidth}, ${window.innerHeight}`;
  cli.innerText = `${window.innerWidth}, ${window.innerHeight}`;
}
showWindowsize();
