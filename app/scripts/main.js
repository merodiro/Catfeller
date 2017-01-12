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

// window.sr = ScrollReveal({ reset: true });
// sr.reveal('.member', { duration: 1000, scale: .5 }, 150);
// sr.reveal('.service', { duration: 1000, scale: .5 }, 150);

window.sr = ScrollReveal({reset: true, distance: '20px', duration: 300});

function revealNextInSequence (sequence) {
  if (sequence.next < sequence.elements.length) {
    sr.reveal(sequence.elements[sequence.next++], {
      afterReveal: function () {
        revealNextInSequence(sequence)
      }
    })
  }
}

function startSequence (selector) {
  var sequence = {
    elements: document.querySelectorAll(selector),
    next: 0
  }
  revealNextInSequence(sequence)
}

startSequence('.scroll')
