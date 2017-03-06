import $ from 'jquery';

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

export default setNavigation;
