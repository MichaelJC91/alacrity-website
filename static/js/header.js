import $ from 'jquery';

export default function() {
  //Checks if user reloads below the top of page
  if( $('header').offset().top > 0 ) {

    $('header').addClass('sticky');
    $('.logo').hide('slow');
    $('.fixedLogo').show('slow');
  }

  //Scroll function to change logo
  $(window).scroll(function() {
    const scroll = $(window).scrollTop();
    //Change logo on scroll
      if(scroll) {
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
