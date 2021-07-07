let catalogButton = document.getElementById("catalog");
let catalogNav = document.querySelector(".subnav__container");

catalogButton.addEventListener("mouseover", (event) => {
  event.target.parentElement.style.borderBottom = "4px solid #888440";
  catalogNav.style.height = "27rem";
});

$(".header__subnav").on("mouseleave", (event) => {
  catalogButton.parentElement.style.borderBottom = "4px solid transparent";
  catalogNav.style.height = 0;
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
