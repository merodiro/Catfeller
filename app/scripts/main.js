$(() => {
  $('.responsive_headline').fitText(1.2, {
    minFontSize: '25px',
    maxFontSize: '60px'
  })

  $('html').niceScroll({
    cursorcolor: '#E94F37',
    cursorwidth: '10px',
    cursorborder: '1px solid #E94F37',
    cursorborderradius: 100,
    smoothscroll: true,
    zindex: 9999
  })

  // loading screen
  $(window).on('load', () => {
    $('.spinner-wrapper').fadeOut(500)
    $('.responsive_headline').addClass('animated rubberBand')
  })
})

window.sr = ScrollReveal({ reset: true, duration: 200 })

function revealNextInSequence (sequence) {
  if (sequence.next < sequence.elements.length) {
    sr.reveal(sequence.elements[sequence.next++], {
      afterReveal () {
        revealNextInSequence(sequence)
      }
    })
  }
}

function startSequence (selector) {
  const sequence = {
    elements: document.querySelectorAll(selector),
    next: 0
  }
  revealNextInSequence(sequence)
}

startSequence('.scroll')
