'use strict';

(function() {

  var aboutTrigger = document.getElementsByClassName('about-trigger')[0];
  var aboutContainer = document.getElementsByClassName('about-container')[0];
  var aboutContainerClose = aboutContainer.getElementsByClassName('close')[0];

  aboutContainerClose.addEventListener('click', function() {
    if (!aboutContainer.classList.contains('hidden')) {
      aboutContainer.classList.add('hidden');
      aboutTrigger.classList.remove('hidden');
    }
  }, false);

  aboutTrigger.addEventListener('click', function() {
    if (aboutContainer.classList.contains('hidden')) {
      aboutContainer.classList.remove('hidden');
      aboutTrigger.classList.add('hidden');
    }
  }, false);

})();
