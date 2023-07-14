/**
 * navbar toggle
 */
const header = document.querySelector("[data-header]");
const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const serviceItemText = document.querySelectorAll(".service-item-text");
const productCategoryText = document.querySelectorAll(".filter-btn.active");
const cardTitle = document.querySelectorAll(".card-title");
const cardPrice = document.querySelectorAll(".card-price"); 
const cardMetaLink = document.querySelectorAll(".card-meta-link");

const navElemArr = [overlay, navOpenBtn, navCloseBtn];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

/**
 * add active class on header when scrolled 300px from top
 */

window.addEventListener("scroll", function () {
  window.scrollY >= 300
    ? header.classList.add("active")
    : header.classList.remove("active");
});

/**
 * add dark mode function
 */

const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  header.classList.toggle("dark");
  navbar.classList.toggle("dark");
  serviceItemText.forEach((element) => {
    element.classList.toggle("dark");
  });
  productCategoryText.forEach((element) => {
    element.classList.toggle("dark");
  });
  cardTitle.forEach((element) => {
    element.classList.toggle("dark");
  });
  cardPrice.forEach((element) => {
    element.classList.toggle("dark");
  });
  cardMetaLink.forEach((element) => {
    element.classList.toggle("dark");
  });
});

/**
 * add cart counter function
 */

const cartBadge = document.querySelector(".cart-badge");

const cartButtons = document.querySelectorAll(".cart-btn");
const counterElement = document.getElementById("counterElement");

let counter = 0;
if (counter == 0) {
  cartBadge.style.backgroundColor = "transparent";
}

cartButtons.forEach((cartButton) => {
  cartButton.addEventListener("click", () => {
    cartBadge.style.backgroundColor = "red";
    counter++;
    counterElement.textContent = counter.toString();
  });
});
