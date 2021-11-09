const btnHamburger = document.querySelector("#btnHamburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const slideElems = document.querySelectorAll(".has-slide");

btnHamburger.addEventListener("click", function () {
  console.log("click hamburger");

  if (header.classList.contains("open")) {
    body.classList.remove("noscroll");
    header.classList.remove("open");
    // header.classList.remove("overlay");
    slideElems.forEach(function (element) {
      element.classList.toggle("slide-in");
      element.classList.add("slide-out");
    });
  } else {
    body.classList.add("noscroll");
    header.classList.add("open");
    // header.classList.add("overlay");
    slideElems.forEach(function (element) {
      element.classList.remove("slide-out");
      element.classList.add("slide-in");
    });
  }
});
