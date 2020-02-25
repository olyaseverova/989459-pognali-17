'use strict';

(function () {

  var filterButtonElement = document.querySelector('.catalog-filter__countries--show');
  var exitFilterButtonElement = document.querySelector('.catalog-filter-exit');
  var exitBottomButtonElement = document.querySelector('.catalog-filter__collapsed-button');

  var grayFilterBackElement = document.querySelector('.gray-filter-back');
  var continentFilterElement = document.querySelector('.catalog-filter__continent__list');
  var catalogFilterElement = document.querySelector('.catalog-filter__collapsed');

  var alphabetLabelElement = document.querySelectorAll('.alphabet-collapsed-label');
  var alphabetLandElement = document.querySelectorAll('.alphabet-land__list');

  var activateCatalogFilter = function () {
    grayFilterBackElement.classList.add('gray-filter-back-collapsed');
    continentFilterElement.classList.add('catalog-filter__continent-collapsed');
    catalogFilterElement.classList.add('catalog-filter__collapsed-block');
    filterButtonElement.classList.add('none');
    exitFilterButtonElement.classList.remove('none');
  };

  var closeCatalogFilter = function () {
    grayFilterBackElement.classList.remove('gray-filter-back-collapsed');
    continentFilterElement.classList.remove('catalog-filter__continent-collapsed');
    catalogFilterElement.classList.remove('catalog-filter__collapsed-block');
    filterButtonElement.classList.remove('none');
    exitFilterButtonElement.classList.add('none');
  };

  filterButtonElement.addEventListener('mousedown', function () {
    activateCatalogFilter();
  });

  filterButtonElement.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.main.ENTER_KEYCODE) {
      activateCatalogFilter();
    }
  });

  exitFilterButtonElement.addEventListener('mousedown', function () {
    closeCatalogFilter();
  });

  exitFilterButtonElement.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.main.ENTER_KEYCODE) {
      closeCatalogFilter();
    }
  });

  exitBottomButtonElement.addEventListener('mousedown', function () {
    closeCatalogFilter();
  });

  exitBottomButtonElement.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.main.ENTER_KEYCODE) {
      closeCatalogFilter();
    }
  });

  alphabetLabelElement.forEach(function (letter) {
    letter.addEventListener('mousedown', function () {

      var str = letter.className;
      var regexp = /.+ (.+)-collapsed/ig;
      var result;
      result = regexp.exec(str)

      if (result == null) {
        alphabetLandElement.forEach(function (land) {
          land.classList.remove('block');
        });
      } else {
        var letterNow = result[1];
        var regexp = new RegExp(".+ "+letterNow+"-collapsed", "ig");

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
