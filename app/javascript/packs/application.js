// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")
require('jquery')

import '../stylesheets/application'
import 'materialize-css/dist/js/materialize'
// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

// Header sidebar
$(function(){
  // Header sidebar
  $('.sidenav').sidenav({
    edge: 'right',
  });
  // Carousel in main top page
  $('.carousel').carousel();
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true,
  });
  autoplay()
  function autoplay() {
    $('.carousel.carousel-slider').carousel('next');
    autoplay: true,
    setTimeout(autoplay, 7500);
  }
  // Icon to go to the top
  $('#top-icon').on('click',function(event){
    $('body, html').animate({
      scrollTop:0
    }, 800);
    event.preventDefault();
  });
});