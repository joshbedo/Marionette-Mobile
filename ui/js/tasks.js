!(function() {  
	'use strict';   

  var findIndicators = function (target) {
    var i;
    var indicators = document.querySelectorAll('button');

    for (; target && target !== document; target = target.parentNode) {
      for (i = indicators.length; i--;) {
        if (indicators[i] === target) {
          return target;
        }
      }
    }
  };

 	var showIndicators = function(ev) {
 		var indicator = findIndicators(ev.target),
 		    container = (indicator) ? indicator.parentElement.parentElement : false;

 		if (!container) return;
 		
 		if (container.classList.contains('showIndicators')) {
 			return container.classList.remove('showIndicators')
 		}

 		container.classList.add('showIndicators');
 	}

  window.addEventListener('touchend', showIndicators);
})();