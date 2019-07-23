$(function() {

//------------------------------slider-----------------------------
  var swiper = new Swiper('.main--slider', {
    slidesPerView: 5,
    spaceBetween: 30,
    navigation: {
      nextEl: '.main--slider__next',
      prevEl: '.main--slider__prev',
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      576: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  });

//------------------------------гамбургер-----------------------------
  $('.hamburger').click(function() {
    $(this).toggleClass('hamburger--active');
    $('nav').toggleClass('nav--active');
    $('header').toggleClass('header--menu');
  });


//----------------------------------------fixed----------------------------------
  $(window).scroll(function(){
      if($(this).scrollTop()>20){
          $('.header').addClass('header--active');
      }
      else if ($(this).scrollTop()<20){
          $('.header').removeClass('header--active');
      }
  });

//-------------------------скорость якоря---------------------------------------
  $(".header__list").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top - 60}, 'slow', 'swing');
  //--------------------закриття меню при кліку на ссилку якоря--------------------
     // $('.hamburger').removeClass('hamburger--active');
     // $('.header-menu').removeClass('header-menu');
     // $('.header--active').removeClass('header--active');
     // $('.nav--active').removeClass('nav--active');

  });

  //-------------------------------активна ссилка на якій знаходишся для меню---------------------------------------
    $('.header__nav ul li a').each(function () {
        var location = window.location.href;
        var link = this.href; 
        if(location == link) {
            $(this).addClass('active');
        }
    });
  
});