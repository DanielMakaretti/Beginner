/* Javascript */

$(function () {
 
 var mixer = mixitup('.directions__list');
 
    $('directions__filter-btn').on('click', function () {
      $('.directions__filter-btn').removeCLass('directions__filter-btn--active')
      $(this).addClass('directions__filter-btn--all')
    });
  });
    $('.team__slider').slick({
      arrows: false,
slidesToShow: 4,
Infinite: true,
draggable: false,
waitForAnimate: false,
});
    $('.team__slider-prev').on('click', function (e) {
      e.preventDefault()
      $('.team__slider').slick('slickPrev')
    });
    $('.team__slider-next').on('click', function (e) {
      e.preventDefault()
      $('.team__slider').slick('slickNext')
    });

    $('.testimonials__slider').slick({
      arrows: false,
      dots: true,
      Infinite: true,
});
$('.testimonials__prev').on('click', function (e) {
  e.preventDefault()
  $('.testimonials__slider').slick('slickPrev')
});
$('.testimonials__next').on('click', function (e) {
  e.preventDefault()
  $('.testimonials__slider').slick('slickNext')
});


 


   
 