

// Making a self enclosed javascript pattern - ou variables will not interfeer with any other jQuery libraries
(function($) {

    $.fn.lsEqualise = function(options) {

    	var newHeight = 0;
		var dataEqualizer = $(this);

		// this should start - 'return this.each( function)' I think to do the callbacks, but when I do it returns before executing anything else
		this.each( function() {

			if($(this).height() > newHeight) {
				newHeight = $(this).height();
			}

		});

		if(newHeight) {
			$(dataEqualizer).height(newHeight);
		}

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