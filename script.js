//hamperger menu
const hamicon = document.querySelector(".hamburger-icon");
const hamlink = document.querySelector(".hamLink");
const mlinks = document.querySelector(".mlinks");

const hamOnOff = function () {
  hamicon.classList.toggle("on");
  mlinks.classList.toggle("on");
};

hamicon.addEventListener("click", hamOnOff);
hamlink.addEventListener("click", hamOnOff);

// this function will make the header get smaller when you scroll down the page and return it to its original size when you are at the top
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY === 0) {
    header.style.height = "15vh";
  } else {
    header.style.height = "8vh";
  }
});
