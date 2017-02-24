$(document).ready(function(){
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
        console.log("You Scrolled");
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

  //Contact Form Logic
  $("form").submit(function(event) {
    event.preventDefault();
    let formData = {
      name: $('.name').val(),
      email: $('.email').val(),
      phone: $('.phone').val(),
      subject: $('.subject').val(),
      message: $('.message').val(),
    }

    $('.loader .icon').addClass('ajaxLoader');

    $.ajax({
      type: "POST",
      url: "/mail",
      data: JSON.stringify(formData),
      contentType: "application/json; charset=UTF-8",
      dataType: 'text',
      success: function() {
        $('.loader').hide();
        $('.responseMessage').text('Message Sent Successfully! Thank you for contacting us!');
        $('.contactMessage').delay(100).slideDown( 1000 );
      },
      error: function() {
        $('.loader').hide();
        $('.responseMessage').addClass('responseMessageError').text('Message Did Not Send. Try Again Later');
        $('.contactMessage').delay(100).slideDown( 1000 );
      }
    });
  });
  setNavigation();
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

//Add Current Menu Item to Active Menu Item
function setNavigation() {
  let path = window.location.pathname;
  $('.nav a').each(function(link) {
    let href = $(this).attr('href');
    if(href === path) {
      $(this).addClass('activeNavLink')
    }
  });
}
