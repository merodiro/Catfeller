$( () =>{
  'use strict';
  $('.responsive_headline').fitText(1.2, { minFontSize: '25px', maxFontSize: '60px'});


  $('html').niceScroll({
    cursorcolor: '#E94F37',
    cursorwidth: '10px',
    cursorborder: '1px solid #E94F37',
    cursorborderradius: 100,
    zindex: 9999
  });


  //loading screen
  $(window).on('load', function() {
    $('.spinner-wrapper').fadeOut(500)
  });
});
