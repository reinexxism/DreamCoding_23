const special = document.getElementById("special");

function showAxis(e) {
  console.log(`pageX : ${e.pageX}, pageY : ${e.pageY}`);
  console.log(`clientX : ${e.clientX}, clientY : ${e.clientY}`);
}

special.addEventListener("click", showAxis);
