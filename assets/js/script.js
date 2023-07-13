/**
 * navbar toggle
 */
const header = document.querySelector("[data-header]");
const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const serviceItemText = document.querySelectorAll(".service-item-text");

const navElemArr = [overlay, navOpenBtn, navCloseBtn];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}



/**
 * add active class on header when scrolled 200px from top
 */

window.addEventListener("scroll", function () {
  window.scrollY >= 300 ? header.classList.add("active")
    : header.classList.remove("active");
})

const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  navbar.classList.toggle("dark");
  serviceItemText.forEach((element) => {
    element.classList.toggle("dark");
  });
})