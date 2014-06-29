(function($){
	
	var object = null;
	var settings = {
		complete: null,
		equaliseForMobile: true,
		equaliseForResize: true,
		minHeight: 0,
	};
	
    $.fn.lsEqualise = function(options){
		// Establish our default settings
		settings = $.extend(settings, options);
		
		object = this;
		
		init(settings);
		return(this);
    }
	
	function init(settings){
		if($(window).width() < 640 && !settings.equaliseForMobile){
			return null;
		}
	  
		if(settings.equaliseForResize){
			$(window).on('resize', function(){
				init(settings);
			});
		}

		var images = $('img', object);

		// only fire after images are loaded
		$(window).load(function(){
			calcHeights();
		});
	}

	// function that calculates all the heights then applies them
	function calcHeights() {
		var newHeight = settings.minHeight;
		// go and find the height of each matching element, if its more than the variable, upadte that variable
		object.each( function() {
			if($(this).height() > newHeight){
				newHeight = $(this).height();
			}
		});
		// apply the height
		applyHeights(newHeight);
	}

	function applyHeights(newHeight) {
		if(newHeight) {
			$(object).height(newHeight);
			complete();
		}
	}
	
	function complete(){
		// now fire the callback once the height has been applied
		if($.isFunction(settings.complete)){
			settings.complete.call(this);
		}
	}
}(jQuery));