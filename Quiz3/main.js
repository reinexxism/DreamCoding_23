const scrBy = document.getElementById("scrollBy");
const scrTo = document.getElementById("scrollTo");
const toSpe = document.getElementById("toSpecial");

function scrollByY() {
  window.scrollBy(0, 100);
}

function scrollToY() {
  window.scrollTo(0, 100);
}

function moveToSpe() {
  window.scrollTo(10, 1423);
}

scrBy.addEventListener("click", scrollByY);
scrTo.addEventListener("click", scrollToY);
toSpe.addEventListener("click", moveToSpe);
