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
responsive:
[
  {
    breakpoint: 1100,
    settings: {
      slidesToShow: 3,
    },   
  },
  {
    breakpoint: 800,
    settings: {
      slidesToShow: 2,
    },   
  },
  {
    breakpoint: 500,
    settings: {
      slidesToShow: 1,
    },   
  },
  {
    breakpoint: 200,
    settings: {
      
    },   
  },
]
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
      appendDots: $('.testimonials__dots'),
      waitForAnimate: false,
      responsive:
      [
        {
          breakpoint: 700,
          settings: {
            
          },   
        },
      ]
    });

$('.testimonials__prev').on('click', function (e) {
  e.preventDefault()
  $('.testimonials__slider').slick('slickPrev')
});
$('.testimonials__next').on('click', function (e) {
  e.preventDefault()
  $('.testimonials__slider').slick('slickNext')
});

// $('.program__acc-link').on('click', function (e) {
// e.preventDefault()
// $(this).toggleClass('program__acc-link--active')
// $(this).children('.program__acc-text').slideToggle()
// });

// $('.program__acc-link').on('click', function (e) {
//   e.preventDefault()
//   $('.program__acc-link').removeCLass('program__acc-link--active')
//   $(this).toggleClass('program__acc-link--active')
//   $(this).children('.program__acc-text').slideToggle()
//   if ($('.program__acc-link').hasClass('program__acc-link--active')) {
//   $('.program__acc-link').removeCLassClass('program__acc-link--active')
//   }
//   });
   
  // $('.program__acc-link').on('click', function (e) {
  //   e.preventDefault()
  //   if ($(this).hasClass('program__acc-link--active')) {
  //     $(this).removeCLass('program__acc-link--active')
  //     $(this).children('.program__acc-text').slideUp()
  //   } else {
  //     $('.program__acc-link').removeCLass('program__acc-link--active')
  //     $('.program__acc-text').slideUp()
  //     $(this).addClass('program__acc-link--active')
  //     $(this).children('.program__acc-text').slideDown()
  //   }
  // });

  $('.program__acc-link').on('click', function(e){
    e.preventDefault()
    if ($(this).hasClass('program__acc-link--active')) {
        $(this).removeClass('program__acc-link--active')
        $(this).children('.program__acc-text').slideUp()
        stopImmediatePropagation()
    }   
    $('.program__acc-link').removeClass('program__acc-link--active')
    $('.program__acc-text').slideUp()
    $(this).toggleClass('program__acc-link--active')
    $(this).children('.program__acc-text').slideDown()
});


setInterval(() => {
  if ($(window).scrollTop() > 0) {
    $('.burger').addClass('burger--follow')
   } else {
    $('.burger').removeClass('burger--follow')
  }
}, 0);

$('.burger, .overlay, .header__top-inner a').on('click', function (e) {
e.preventDefault()
$('.header__top-inner').toggleClass('header__top--open')
$('.burger').toggleClass('burger--active')
$('.overlay').toggleClass('overlay--show')
});

$('.footer__sitemap-head').on('click', function (e) {
  $(this).next().slideToggle()
});
$('.footer__courses-head').on('click', function (e) {
  $(this).next().slideToggle()
});
$('.footer__contactus-head').on('click', function (e) {
  $(this).next().slideToggle()
});


 