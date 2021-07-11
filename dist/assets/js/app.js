<<<<<<< HEAD
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let catalogButton = document.getElementById(\"catalog\");\r\nlet catalogBlock = document.querySelector(\".header__subnav\");\r\n\r\ncatalogButton.addEventListener(\"mouseover\", (event) => {\r\n  event.target.parentElement.style.borderBottom = \"4px solid #888440\";\r\n  catalogBlock.style.height = \"27rem\";\r\n});\r\n\r\n$(\".header__subnav\").on(\"mouseleave\", (event) => {\r\n  catalogButton.parentElement.style.borderBottom = \"4px solid transparent\";\r\n  catalogBlock.style.height = 0;\r\n});\r\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ })

/******/ });
=======
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
>>>>>>> newBranch
