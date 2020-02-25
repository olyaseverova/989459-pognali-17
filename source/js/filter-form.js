'use strict';

(function () {

  var countryElement = document.querySelector('.choose-country');
  var exitButoonElement = document.querySelector('.choose-country-exit');
  var dropdownButoonElement = document.querySelector('.choose-country-dropdown');
  var filterExitElement = document.querySelector('.filter-exit');
  var filterCollapsedElement = document.querySelector('.directions-steps__item-collapsed');

  var alphabetLabelElement = document.querySelectorAll('.alphabet-label');
  var alphabetLandElement = document.querySelectorAll('.alphabet-form__list');


  var activateFormFilter = function () {
    exitButoonElement.classList.add('none');
    filterCollapsedElement.classList.remove('none');
  };

  var closeFormFilter = function () {
    exitButoonElement.classList.remove('none');
    filterCollapsedElement.classList.add('none');
  };

  countryElement.addEventListener('mousedown', function () {
    activateFormFilter();
  });

  dropdownButoonElement.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.main.ENTER_KEYCODE) {
      activateFormFilter();
    }
  });

  filterExitElement.addEventListener('mousedown', function () {
    closeFormFilter();
  });

  filterExitElement.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.main.ENTER_KEYCODE) {
      closeFormFilter();
    }
  });

  alphabetLabelElement.forEach(function (letter) {
    letter.addEventListener('mousedown', function () {

      var str = letter.className;
      var regexp = /.+ (.+)-alphabet/ig;
      var result;
      result = regexp.exec(str)

      if (result == null) {
        alphabetLandElement.forEach(function (land) {
          land.classList.remove('block');
        });
      } else {
        var letterNow = result[1];
        var regexp = new RegExp(".+ "+letterNow+"-alphabet", "ig");

        alphabetLandElement.forEach(function (land) {
          if (regexp.test(land.className)) {
            land.classList.add('block');
          } else {
            land.classList.remove('block');
          }
        });
      }

    });
  });

})();
