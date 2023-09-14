let card = document.querySelector(".card-share");
card.addEventListener("click", function () {
  let overlay = document.querySelector(".overlay");
  overlay.style.cssText = "visibility:visible;";
});

function removeOverlay() {
  let overlay = document.querySelector(".overlay");
  overlay.style.cssText = "visibility:hidden;";
}
