(function($) {

    $.fn.lsEqualise = function(options) {


      // Establish our default settings
      var settings = $.extend({
          complete    : null
      }, options);


      var newHeight = 0;
      var dataEqualizer = $(this);
      var images = $('img', dataEqualizer);

      // only fire after images are loaded
      $(images).load(function() {     
        calcHeights();
      });

      // function that calculates all the heights then applies them
      function calcHeights() {
        // go and find the height of each matching element, if its more than the variable, upadte that variable
        dataEqualizer.each( function() {
          if($(this).height() > newHeight) {
            newHeight = $(this).height();
          }
        });
        // apply the height
        applyHeights();
      }

      function applyHeights() {
        if(newHeight) {
          $(dataEqualizer).height(newHeight);
        }

        // now fire the callback once the height has been applied
        if ( $.isFunction( settings.complete ) ) {
          settings.complete.call( this );
        }

      }
      return;

    }

}(jQuery));