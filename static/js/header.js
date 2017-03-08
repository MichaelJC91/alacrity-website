import $ from 'jquery';

export default function() {

  //Checks if user reloads below the top of page
  if( $('header').offset().top > 0 ) {

    $('header').addClass('sticky');
    $('.logo').hide('slow');
    $('.fixedLogo').show('slow');
  }
}
