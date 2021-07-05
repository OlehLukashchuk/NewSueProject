let catalogButton = document.getElementById("catalog");
let catalogBlock = document.querySelector(".header__subnav");

catalogButton.addEventListener("mouseover", (event) => {
  event.target.parentElement.style.borderBottom = "4px solid #888440";
  catalogBlock.style.height = "27rem";
});

$(".header__subnav").on("mouseleave", (event) => {
  catalogButton.parentElement.style.borderBottom = "4px solid transparent";
  catalogBlock.style.height = 0;
});
