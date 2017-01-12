let wow = new WOW({
  boxClass: 'wow', // default
  animateClass: 'animated', // default
  offset: 50, // default
  mobile: true, // default
  live: true // default
})
wow.init();
$(() => {
  'use strict';
  $('.responsive_headline').fitText(1.2, {
    minFontSize: '25px',
    maxFontSize: '60px'
  });

  $('html').niceScroll({
    cursorcolor: '#E94F37',
    cursorwidth: '10px',
    cursorborder: '1px solid #E94F37',
    cursorborderradius: 100,
    smoothscroll: true,
    zindex: 9999
  });

  //loading screen
  $(window).on('load', function() {
    $('.spinner-wrapper').fadeOut(500)
    $('.responsive_headline').addClass('animated rubberBand');
  });
});
