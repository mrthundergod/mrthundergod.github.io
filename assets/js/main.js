(function ($) {
 "use strict";

  /* =====| Featured News |===== */
  $('.featured-news').slick({
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
    });

  /* =====| Flash News|===== */

  $('.flash-news').slick({
    speed: 8000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false
  });


})(jQuery);  




