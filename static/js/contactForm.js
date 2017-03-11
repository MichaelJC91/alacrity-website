import $ from 'jquery';

//Contact Form Logic
function onSubmit() {
  $("form").submit(function(event) {
    // event.preventDefault();
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
}

export onSubmit;
