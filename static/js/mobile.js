import $ from 'jquery';

export default () => {
  const windowSize = $(window).width()
  const mobileSize = 768;

  // Different controls on mobile
  if(windowSize <= mobileSize) {
    $('header').addClass('sticky');
    $('.logo').hide('slow');
    $('.fixedLogo').show('slow');
    $('.navbar-nav').addClass('mr-auto')
    $('.contactFormWrapper').removeClass('justify-content-between')
      .addClass('justify-content-center');
    $('.topPadding50').removeClass('topPadding50').addClass('topPadding20');

  } else {
    //Scroll function to change logo
    $(window).scroll(function() {
      const scroll = $(window).scrollTop();

      //Change logo on scroll
      if(scroll && windowSize > mobileSize) {
        $('header').addClass('sticky');
        $('.logo').hide('slow');
        $('.fixedLogo').show('slow');
      } else {
        $('header').removeClass('sticky').addClass('transparentBackground');
        $('.fixedLogo').hide('slow');
        $('.logo').show('slow');
      }
    });
  }
}
