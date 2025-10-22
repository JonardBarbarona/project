// Floating Home Button Scroll Up
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Hide header on scroll down
let prevScrollPos = window.pageYOffset;
const header = document.getElementById("header");

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos < currentScrollPos) {
    header.style.top = "-70px"; // hide
  } else {
    header.style.top = "0"; // show
  }
  prevScrollPos = currentScrollPos;
}

// Menu toggle for mobile
const toggler = document.getElementById("menu-toggler");
const navLinks = document.getElementById("navLinks");

toggler.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
