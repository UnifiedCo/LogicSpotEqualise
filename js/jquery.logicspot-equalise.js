(function($) {

    $.fn.lsEqualise = function() {

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

        // apply new height
        if(newHeight) {
          $(dataEqualizer).height(newHeight);
        }
      }

      return;

    }

}(jQuery));






// ----------------------------------------------------------------

      // $(window).load(function(){
      //   logicspotNewHeight();
      //   $(window).on('resize', function(){
      //     logicspotNewHeight();
      //   });
      // });

      // function logicspotNewHeight(){
      //   /** Start simple LogicSpot Equaliser **/
      //   $('div[data-logicspot-equal]').height('');
      //   var dataEqualizer = $('div[data-logicspot-equal]');
      //   var newHeight = 0;
      //   $.each(dataEqualizer, function(){
      //     if($(this).height() > newHeight)
      //     {
      //       newHeight = $(this).height();
      //     }
      //   });
      //   if(newHeight)
      //   {
      //     $(dataEqualizer).height(newHeight);
      //     Foundation.libs.equalizer.reflow();
      //   }
      // }


// ----------------------------------------------------------------
// // Making a self enclosed javascript pattern - ou variables will not interfeer with any other jQuery libraries
// (function($) {

//     $.fn.helloWorld = function(options) {

//         // Establish our default settings
//         var settings = $.extend({
//             text         : 'Hello, World!',
//             color        : null,
//             fontStyle    : null,
//             complete 	 : null
//         }, options);

// 		return this.each( function() {
// 		    $(this).text( settings.text );

// 		    if ( settings.color ) {
// 		        $(this).css( 'color', settings.color );
// 		    }

// 		    if ( settings.fontStyle ) {
// 		        $(this).css( 'font-style', settings.fontStyle );
// 		    }

// 		    // Callback when plugin is executed
// 		    if ( $.isFunction( settings.complete ) ) {
//         		settings.complete.call( this );
//     		}
// 		});

//     }

// }(jQuery));