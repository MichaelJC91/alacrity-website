import $ from 'jquery';

export default function() {

  //Checks if user reloads below the top of page
  if( $('header').offset().top ) {
    $('header').addClass('sticky');
    $('.logo').hide('slow');
    $('.fixedLogo').show('slow');
  }
}
