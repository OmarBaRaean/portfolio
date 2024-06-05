//hamperger menu
const hamicon = document.querySelector(".hamburger-icon");
const hamlink = document.querySelector(".hamLink");
const mlinks = document.querySelector(".mlinks");

const hamOnOff = function () {
  hamicon.classList.toggle("on");
  mlinks.classList.toggle("on");
};

const headerAdjust = () => {
  const header = document.querySelector("header");
  if (window.scrollY === 0) {
    header.style.height = "15vh";
  } else {
    header.style.height = "8vh";
  }
};

hamicon.addEventListener("click", hamOnOff);
hamlink.addEventListener("click", hamOnOff);

// this function will make the header get smaller when you scroll down the page and return it to its original size when you are at the top
window.addEventListener("scroll", headerAdjust);

document.addEventListener("DOMContentLoaded", function () {
  headerAdjust();
  const skills = document.querySelectorAll(".skill");

  skills.forEach(function (element) {
    element.addEventListener("mouseenter", () => {
      element.classList.toggle("skill-hover");
    });
    element.addEventListener("mouseleave", () => {
      element.classList.toggle("skill-hover");
    });
  });
});
