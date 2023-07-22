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
    })
 