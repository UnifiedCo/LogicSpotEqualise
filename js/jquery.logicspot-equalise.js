
// Making a self enclosed javascript pattern - ou variables will not interfeer with any other jQuery libraries
(function($) {

    $.fn.helloWorld = function() {

        return this.each( function() {
            $(this).text("Hello, World!");
        });

    }

}(jQuery));