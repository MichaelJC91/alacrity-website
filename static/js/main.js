$(document).ready(function(){
  //Checks if user reloads below the top of page
  if( $('header').offset().top > 0 ) {

    $('header').addClass('sticky');
    $('.logo').hide('slow');
    $('.fixedLogo').show('slow');

  }

  //Scroll function to change logo
  $(window).scroll(function() {
    //Logo & scroll variables
    const logoOne = 'http://res.cloudinary.com/alacrity-web-development/image/upload/v1487146066/Alacrity%20Web%20Development/Alacrity_Web_Development.png';
    const logoTwo = 'http://res.cloudinary.com/alacrity-web-development/image/upload/v1487296555/Alacrity_Icon_White_-_Small.png'
    const scroll = $(window).scrollTop();

    //Change logo on scroll
    if(scroll > 0) {
      $('header').addClass('sticky');
      $('.logo').hide('slow');
      $('.fixedLogo').show('slow');
    } else {
      $('header').removeClass('sticky').addClass('transparentBackground');
      $('.fixedLogo').hide('slow');
      $('.logo').show('slow');
    }
  });
  
  //Home page - Benefits section toggle
  toggleFunction('.homeBenefitsOne');
  toggleFunction('.homeBenefitsTwo');
  toggleFunction('.homeBenefitsThree');

});

//Toggle function
function toggleFunction(target) {
  $( target + ' a').click(function() {
   if( $(target).hasClass('notActive') ) {
     $(target).removeClass('notActive').addClass('activeToggle');
   } else {
     $(target).removeClass('activeToggle').addClass('notActive');
   }
  });
}
