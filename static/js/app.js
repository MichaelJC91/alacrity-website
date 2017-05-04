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
import 'autotrack';
import 'jquery-smooth-scroll';
import './cat404';

export default $(document).ready(() => {

  //Google analytics
  ga('create', 'UA-93931236-1', 'auto');
  ga('send', 'pageview');

  // Run header check function
  header();

  //Smooth anchor scroll
  $('#homeProjectStart').smoothScroll({
    speed: 1250
  });

  //Run Mobile function
  mobile();

  // Check which window matches the url
  // then put border underneath links with matching url
  setNavigation();

  // Check if page width is > 990px
  // If not then make col heights the same
  if($(window).width() > 990) {
    colHeight()
  } /*else {
    $('.googleMapWrapper').css('height', '400px');
  }*/

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
