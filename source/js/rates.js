'use strict';

(function () {
  var ratesButtonElement = document.querySelector('.rates__button');
  var modalRatesPopapElement = document.querySelector('.modal-rates-popup');
  var exitRatesPopapElement = document.querySelector('.rates-popup__button');

  var activateRatesPopap = function () {
    modalRatesPopapElement.classList.add('modal-show');
  };

  var closeRatesPopap = function () {
    modalRatesPopapElement.classList.remove('modal-show');
  };

  ratesButtonElement.addEventListener('mousedown', function () {
    activateRatesPopap();
  });

  ratesButtonElement.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.main.ENTER_KEYCODE) {
      activateRatesPopap();
    }
  });

  exitRatesPopapElement.addEventListener('mousedown', function () {
    closeRatesPopap();
  });

  exitRatesPopapElement.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.main.ENTER_KEYCODE) {
      closeRatesPopap();
    }
  });

})();
