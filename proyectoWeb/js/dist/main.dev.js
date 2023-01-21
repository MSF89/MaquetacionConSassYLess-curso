"use strict";

var btnMenu = document.querySelector('button.iconMenu');
var navPrincipal = document.querySelector('header.principal nav');

btnMenu.onclick = function () {
  navPrincipal.classList.toggle('active');
  btnMenu.classList.toggle('active');
};

var fondos = document.querySelectorAll(".imagen");
var flechaPrev = document.querySelector(".flecha .prev");

flechaPrev.onclick = function () {
  for (var i = 0; i < fondos.length; i++) {
    if (fondos[i].classList.contains("active")) {
      fondos[i].classList.toggle("active");

      if (i - 1 == -1) {
        fondos[fondos.length - 1].classList.toggle("active");
      } else {
        fondos[i - 1].classList.toggle("active");
      }

      break;
    }
  }
};

var flechaNext = document.querySelector(".flecha .next");

flechaNext.onclick = function () {
  for (var i = 0; i < fondos.length; i++) {
    if (fondos[i].classList.contains("active")) {
      fondos[i].classList.toggle("active");

      if (i + 1 == fondos.length) {
        fondos[0].classList.toggle("active");
      } else {
        fondos[i + 1].classList.toggle("active");
      }

      break;
    }
  }
};