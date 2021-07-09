/* DOM */
let catalogButton = document.getElementById("catalog");
let mobileCatalogButton = document.querySelector(".mobile-catalog");
let arrowCatalog = document.querySelector(".arrow-catalog");

let aboutButton = document.getElementById("about");
let mobileAboutButton = document.querySelector(".mobile-about");
let arrowAbout = document.querySelector(".arrow-about");

let productButton = document.querySelectorAll(".product-element__button");

let categoryList = document.querySelector('.category-list');
let categoryButton = document.querySelector('.btn-category');
let arrowCategory = document.querySelector('.arrow-category');

let infoList = document.querySelector('.info-list');
let infoButton = document.querySelector('.btn-info');
let arrowInfo = document.querySelector('.arrow-info');

let catalogNav = document.querySelector(".subnav1");
let mobileCatalog = document.querySelector(".subnav-catalog");
let aboutNav = document.querySelector(".subnav2");
let mobileAbout = document.querySelector(".subnav-about");

let burger = document.querySelector(".burger-menu");
let mobileMenu = document.querySelector(".mobile-menu");
let productMobile = document.querySelector(".products-mobile");

/* Events */

catalogButton.addEventListener("mouseover", (event) => {
  event.target.parentElement.style.borderBottom = "4px solid #888440";
  aboutButton.parentElement.style.borderBottom = "4px solid transparent";
  catalogNav.style.height = "27rem";
  aboutNav.style.height = "0";
});
aboutButton.addEventListener("mouseover", (event) => {
  event.target.parentElement.style.borderBottom = "4px solid #888440";
  catalogButton.parentElement.style.borderBottom = "4px solid transparent";
  aboutNav.style.height = "27rem";
  catalogNav.style.height = "0";
});
$(".header__subnav").on("mouseleave", (event) => {
  catalogButton.parentElement.style.borderBottom = "4px solid transparent";
  aboutButton.parentElement.style.borderBottom = "4px solid transparent";
  catalogNav.style.height = 0;
  aboutNav.style.height = 0;
});
/* Events */

/* MOBILE */

if (
  navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/webOS/i) ||
  navigator.userAgent.match(/iPhone/i) ||
  navigator.userAgent.match(/iPad/i) ||
  navigator.userAgent.match(/iPod/i) ||
  navigator.userAgent.match(/BlackBerry/i) ||
  navigator.userAgent.match(/Windows Phone/i)
) {
  productMobile.style.display = "block";
  for (let i = 0; i < productButton.length; i++) {
    productButton[i].innerText = "В корзину";
  }

  $(".slider1").slick({
    adaptiveHeight: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 500,
    easing: "ease",
    // autoplay: true,
    infinite: true,
    autoplaySpeed: 1500,
    pauseOnFocus: true,
    pausedOnHover: true,
    touchThreshold: 10,
  });

  $(".slider2").slick({
    adaptiveHeight: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 500,
    easing: "ease",
    infinite: true,
    autoplaySpeed: 1500,
    pauseOnFocus: true,
    pausedOnHover: true,
    touchThreshold: 10,
  });
} else {
  $(".slider1").slick({
    adaptiveHeight: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    easing: "ease",
    // autoplay: true,
    infinite: true,
    autoplaySpeed: 1500,
    pauseOnFocus: true,
    pausedOnHover: true,
    touchThreshold: 10,
  });
  $(".slider2").slick({
    adaptiveHeight: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    easing: "ease",
    infinite: true,
    autoplaySpeed: 1500,
    pauseOnFocus: true,
    pausedOnHover: true,
    touchThreshold: 10,
  });
}

burger.addEventListener("click", () => {
  mobileMenu.classList.toggle("_open");
  burger.classList.toggle("_active");
});

mobileCatalogButton.addEventListener("click", () => {
  mobileCatalog.classList.toggle("_open");
  arrowCatalog.classList.toggle("_open");
});
arrowCatalog.addEventListener("click", () => {
  mobileCatalog.classList.toggle("_open");
  arrowCatalog.classList.toggle("_open");
});

mobileAboutButton.addEventListener("click", () => {
  mobileAbout.classList.toggle("_open");
  arrowAbout.classList.toggle("_open");
});
arrowAbout.addEventListener("click", () => {
  mobileAbout.classList.toggle("_open");
  arrowAbout.classList.toggle("_open");
});

categoryButton.addEventListener("click", () => {
  categoryList.classList.toggle("_open");
  arrowCategory.classList.toggle("_open");
})
arrowCategory.addEventListener("click", () => {
  categoryList.classList.toggle("_open");
  arrowCategory.classList.toggle("_open");
})

infoButton.addEventListener("click", () => {
  infoList.classList.toggle("_open");
  arrowInfo.classList.toggle("_open");
})
arrowInfo.addEventListener("click", () => {
  infoList.classList.toggle("_open");
  arrowInfo.classList.toggle("_open");
})
/* MOBILE */
