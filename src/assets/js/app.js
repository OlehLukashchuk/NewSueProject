/* DOM */
let catalogButton = document.getElementById("catalog");
let catalogNav = document.querySelector(".subnav1");
let mobileCatalog = document.querySelector(".mobile-subnav__catalog");
let subnavCatalog = document.querySelector(".subnav-catalog");
let arrowCatalog = document.querySelector(".arrow-catalog");

let aboutButton = document.getElementById("about");
let aboutNav = document.querySelector(".subnav2");
let mobileAbout = document.querySelector(".mobile-subnav__about");
let subnavAbout = document.querySelector(".subnav-about");
let arrowAbout = document.querySelector(".arrow-about");

let mobileCategory = document.querySelector(".mobile-subnav__category");
let categoryList = document.querySelector(".category-list");
let arrowCategory = document.querySelector(".arrow-category");

let mobileInfo = document.querySelector(".mobile-subnav__info");
let infoList = document.querySelector(".info-list");
let arrowInfo = document.querySelector(".arrow-info");

let productButton = document.querySelectorAll(".product-element__button");
let burger = document.querySelector(".burger-menu");
let mobileMenu = document.querySelector(".mobile-menu");

/* DESKTOP */

// DESKTOP Catalog //
catalogButton.addEventListener("mouseover", (event) => {
  event.target.parentElement.style.borderBottom = "4px solid #888440";
  aboutButton.parentElement.style.borderBottom = "4px solid transparent";
  catalogNav.style.height = "27rem";
  aboutNav.style.height = "0";
});
//DESKTOP About //
aboutButton.addEventListener("mouseover", (event) => {
  event.target.parentElement.style.borderBottom = "4px solid #888440";
  catalogButton.parentElement.style.borderBottom = "4px solid transparent";
  aboutNav.style.height = "35rem";
  catalogNav.style.height = "0";
});

// DESKTOP subnav//
$(".header__subnav").on("mouseleave", (event) => {
  catalogButton.parentElement.style.borderBottom = "4px solid transparent";
  aboutButton.parentElement.style.borderBottom = "4px solid transparent";
  catalogNav.style.height = 0;
  aboutNav.style.height = 0;
});
/* DESKTOP */

/* MOBILE */

// Check Device //
if (
  navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/webOS/i) ||
  navigator.userAgent.match(/iPhone/i) ||
  navigator.userAgent.match(/iPad/i) ||
  navigator.userAgent.match(/iPod/i) ||
  navigator.userAgent.match(/BlackBerry/i) ||
  navigator.userAgent.match(/Windows Phone/i)
) {
  for (let i = 0; i < productButton.length; i++) {
    productButton[i].innerText = "В корзину";
  }

  // Sliders //

  $(".slider").slick({
    adaptiveHeight: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    speed: 500,
    easing: "ease",
    autoplay: false,
    infinite: true,
    autoplaySpeed: 1500,
    pauseOnFocus: true,
    pausedOnHover: true,
    touchThreshold: 10,
  });
} else {
  $(".slider").slick({
    adaptiveHeight: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 500,
    easing: "ease",
    autoplay: false,
    infinite: true,
    autoplaySpeed: 1500,
    pauseOnFocus: true,
    pausedOnHover: true,
    touchThreshold: 10,
  });
}

// Hide some arrows//
let arrowSlider = document.querySelectorAll(".slick-arrow");

for (let i = 0; i < arrowSlider.length; i++) {
  arrowSlider[i].style.display = "none";
  arrowSlider[0].style.display = "block";
  arrowSlider[1].style.display = "block";
}

// Burger open //
burger.addEventListener("click", () => {
  mobileMenu.classList.toggle("_open");
  burger.classList.toggle("_active");
});

// Mobile Catalog //
mobileCatalog.addEventListener("click", () => {
  subnavCatalog.classList.toggle("_open");
  arrowCatalog.classList.toggle("_open");
});

// Mobile About //
mobileAbout.addEventListener("click", () => {
  subnavAbout.classList.toggle("_open");
  arrowAbout.classList.toggle("_open");
});

// Mobile Category //

mobileCategory.addEventListener("click", () => {
  categoryList.classList.toggle("_open");
  arrowCategory.classList.toggle("_open");
});

// Mobile Info //
mobileInfo.addEventListener("click", () => {
  infoList.classList.toggle("_open");
  arrowInfo.classList.toggle("_open");
});

/* MOBILE */
