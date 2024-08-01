// class active
const navbarNav = document.querySelector(".navbar-nav");
// Toggle
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
// Menghilangkan Nav
const hamburger = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
