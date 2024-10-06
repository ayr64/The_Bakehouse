$(function () {
  $(window).scroll(function () {
    $(".topics__content").each(function () {

      let scroll = $(window).scrollTop();

      let target = $(this).offset().top;

      let windowHeight = $(window).height();

      if (scroll > target - windowHeight + $(this).outerHeight()) {
        // outerHeight()はpaddingを含めた高さを取得する
        $(this).addClass("fadein-up");
      }
    });

    $(".about__logo").each(function () {

      let scroll = $(window).scrollTop();

      let target = $(this).offset().top;

      let windowHeight = $(window).height();

      if (scroll > target - windowHeight + $(this).outerHeight()) {
        // outerHeight()はpaddingを含めた高さを取得する
        $(this).addClass("fadein-up");
      }
    });

    $(".about__text").each(function () {

      let scroll = $(window).scrollTop();

      let target = $(this).offset().top;

      let windowHeight = $(window).height();

      if (scroll > target - windowHeight + $(this).outerHeight()) {
        // outerHeight()はpaddingを含めた高さを取得する
        $(this).addClass("fadein-up");
      }
    });

    $(".about__left").each(function () {

      let scroll = $(window).scrollTop();

      let target = $(this).offset().top;

      let windowHeight = $(window).height();

      if (scroll > target - windowHeight + $(this).outerHeight()) {
        // outerHeight()はpaddingを含めた高さを取得する
        $(this).addClass("fadein-up");
      }
    });

    $(".about__right").each(function () {
  
      let scroll = $(window).scrollTop();
  
      let target = $(this).offset().top;
  
      let windowHeight = $(window).height();
  
      if (scroll > target - windowHeight + $(this).outerHeight()) {
        // outerHeight()はpaddingを含めた高さを取得する
        $(this).addClass("fadein-up");
      }
    });
    
    $(".lineup__list__item").each(function () {
  
      let scroll = $(window).scrollTop();
  
      let target = $(this).offset().top;
  
      let windowHeight = $(window).height();
  
      if (scroll > target - windowHeight + $(this).outerHeight()) {
        // outerHeight()はpaddingを含めた高さを取得する
        $(this).addClass("fadein-up");
      }
    });

    $(".topics__list").each(function () {
  
      let scroll = $(window).scrollTop();
  
      let target = $(this).offset().top;
  
      let windowHeight = $(window).height();
  
      if (scroll > target - windowHeight + $(this).outerHeight()) {
        // outerHeight()はpaddingを含めた高さを取得する
        $(this).addClass("fadein-up");
      }
    });
  });
});