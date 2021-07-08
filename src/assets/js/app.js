let catalogButton = document.getElementById("catalog");
let aboutButton = document.getElementById("about");
let catalogNav = document.querySelector(".subnav1");
let aboutNav = document.querySelector(".subnav2");
let burgerMenu = document.querySelector(".burger-menu");

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

$(document).ready(() => {
  $(".slider1").slick({
    adaptiveHeight: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    easing: "ease",
    autoplay: true,
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
});

burgerMenu.addEventListener('click',() => {
  burgerMenu.classList.toggle('_active')
})