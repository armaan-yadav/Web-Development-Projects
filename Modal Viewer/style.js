const btn = document.querySelectorAll(".btn");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-btn");

const closeFunction = function () {
  overlay.classList.add("hidden");
};

btn.forEach((element) => {
  element.addEventListener("click", function () {
    // overlay.style.visibility = "visible";
    overlay.classList.remove("hidden");
  });
});

closeBtn.addEventListener("click", closeFunction);
// here if we write closeFunction() then js will immediately call the function without even waiting for the button to be clicked;
// and closeFunction will only be executed if the added event is completed
overlay.addEventListener("click", closeFunction);

// key press is a global event as it is not dependent on a single sectio of code //

document.addEventListener("keydown", function (e) {
  if (e.key == "Escape") {
   closeFunction();
  }
});
