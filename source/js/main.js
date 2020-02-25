'use strict';

(function () {

  var ENTER_KEYCODE = 13;

  var scrollElement = document.querySelector('.scroll-menu');
  var burgerElement = document.querySelector('.page-header__burger');
  var exitScrollMenuElement = document.querySelector('.scroll-menu__icon-close');

  var activateScrollMenu = function () {
    scrollElement.classList.add('block');
  };

  var closeScrollMenu = function () {
    scrollElement.classList.remove('block');
  };

  burgerElement.addEventListener('mousedown', function () {
    activateScrollMenu();
  });

  burgerElement.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      activateScrollMenu();
    }
  });

  exitScrollMenuElement.addEventListener('mousedown', function () {
    closeScrollMenu();
  });

  exitScrollMenuElement.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closeScrollMenu();
    }
  });

  window.main = {
    ENTER_KEYCODE: ENTER_KEYCODE
  };

})();
