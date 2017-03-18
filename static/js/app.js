import $ from 'jquery';
import setNavigation from './setNavigation';
import colHeight from './columnHeights';
window.$ = window.jQuery = $;
import tether from 'tether';
global.Tether = tether;
require('bootstrap');
import toggleFunction from './toggleFunction';
import header from './header';
import slickCarousel from 'slick-carousel';
import mobile from './mobile';
import anchorScroll from './smoothScroll';
import 'autotrack';

//Google analytics
ga('create', 'UA-93931236-1', 'auto');
ga('send', 'pageview');

export default $(document).ready(() => {

  // Run header check function
  header();

  //Smooth anchor scroll
  anchorScroll();

  //Run Mobile function
  mobile();

  // Check which window matches the url
  // then put border underneath links with matching url
  setNavigation();

  // Check if page width is > 990px
  // If not then make col heights the same
  if($(window).width() > 990) {
    colHeight()
  } else {
    $('#googleMap').css('height', '400px');
  }

  //Fire contact form logic
  // contactForm();

  //Home page - Benefits section toggle
  toggleFunction('.homeBenefitsOne');
  toggleFunction('.homeBenefitsTwo');
  toggleFunction('.homeBenefitsThree');

  // Waypointjs Stats
  $('.counter').counterUp({
      delay: 10,
      time: 800
  });

  //Testimonial Slider
  $('.testimonials').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    fade: true,
    mobileFirst: true
  });

});
