$(document).ready(function(){
  page.init();
})

// nice little fadeIn snippet thanks to tcloninger, found here: http://jsfiddle.net/tcloninger/e5qad/

/* Every time the window is scrolled ... */
$(window).scroll( function(){
    /* Check the location of each desired element */
    $('.hideme').each( function(i){
        var bottom_of_object = $(this).offset().top + $(this).outerHeight() - 100;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        /* If the object is completely visible in the window, fade it in */
        if( bottom_of_window > bottom_of_object ){
            $(this).animate({'opacity':'1'},400);
        }
    });
});

var page = {
  init: function(){
    page.events();
  },
  events: function(){
  },



}
