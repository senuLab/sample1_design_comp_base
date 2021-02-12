$(function(){
  $(window).on('scroll',function() {
    var scroll = $(window).scrollTop();

    if ($(this).scrollTop() > 100) {
      $('.p-to-top').fadeIn();
    } else {
      $('.p-to-top').fadeOut();
    }
  });

  document.addEventListener('touchmove', function(e) {e.preventDefault();}, {passive: false});

  console.log(document);

  //ハンバーガーメニュー
  $('.p-header__trigger').on('click',function(){
    if($(this).hasClass('p-header__trigger--is-active')){
      $(this).removeClass('p-header__trigger--is-active');
      $(".p-header__btn").toggleClass("p-header__btn--is-active");
      $('.p-header__nav-wrap').removeClass('p-header__nav-wrap--is-active');
      $('.p-header__overlay').removeClass('p-header__overlay--is-open');
      $("html").css("overflow", "scroll");
      $('body').css('overflow', 'scroll');
    }  
    else {
      $(this).addClass('p-header__trigger--is-active');
      $(".p-header__btn").toggleClass("p-header__btn--is-active");
      $('.p-header__nav-wrap').addClass('p-header__nav-wrap--is-active'); 
      $('.p-header__overlay').addClass('p-header__overlay--is-open');
      $("html").css("overflow", "hidden");
      $('body').css('overflow', 'hidden');
    } 
  });

  $('.p-header__overlay').on('click',function(){
    if($(this).hasClass('p-header__overlay--is-open')){
      $('.p-header__trigger').removeClass('p-header__trigger--is-active');
      $(".p-header__btn").toggleClass("p-header__btn--is-active");
      $('.p-header__nav-wrap').removeClass('p-header__nav-wrap--is-active');
      $('.p-header__overlay').removeClass('p-header__overlay--is-open');
      $("html").css("overflow", "scroll");
      $('body').css('overflow', 'scroll');
    }
  }); 

  //スワイパー
  var mySwiper = new Swiper ('.swiper-container', {
      width:400,
      spaceBetween:40,
      loop: true,
      loopAdditionalSlides:3,

      breakpoints:{
          767:{
              width:274,
              spaceBetween:20,
              loopAdditionalSlides:4,
          } 
      },

      pagination: { 
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
  });

  //Q&Aのアコーディオン
  $(".p-qa__item").on("click",function(){
    if($(this).children("p").hasClass("p-qa__question--close")){
      $(this).children("div").slideDown();
      $(this).children("p").removeClass("p-qa__question--close");
      $(this).children("p").addClass("p-qa__question--open");
    }
    else {
      $(this).children("div").slideUp();
      $(this).children("p").removeClass("p-qa__question--open");
      $(this).children("p").addClass("p-qa__question--close");
    }
  });

  //スクロール
  $('.p-header__nav-link, .p-top__btn').on("click",function () {

    $('html').css('overflow', 'scroll');
    $('body').css('overflow', 'scroll');

    if($('.p-header__nav-wrap').hasClass('p-header__nav-wrap--is-active')){
      $('.p-header__nav-wrap').toggleClass('p-header__nav-wrap--is-active');
      $('.p-header__trigger').removeClass('p-header__trigger--is-active');
      $(".p-header__btn").toggleClass("p-header__btn--is-active");
      $('.p-header__overlay').removeClass('p-header__overlay--is-open');
    }


    let header = $(".l-header").innerHeight(); 
    let id = $(this).attr("href");
    let position = $(id).offset().top - header;
    
    $('body,html').animate({
      scrollTop: position
    }, 500);
    
    return false;
        
    });

  //トップへスクロール
  $('.p-to-top, .p-header__logo-link').on("click",function () {

    let header = $(".l-header").innerHeight(); 
    let id = $(this).attr("href");
    let position = $(id).offset().top - header;
    
    $('body,html').animate({
      scrollTop: position
    }, 500);
    return false;
  });

  let $input = $(".p-contact__input--required");
  let $button = $(".p-contact__btn");

  //必須項目の入力判定
  $input.on("change",function(){

    if($(".p-contact__input-name").val() !== "" &&
      $(".p-contact__input-kana").val() !== "" &&
      $(".p-contact__input-checkbox").prop("checked") === true
    ){
      $button.prop("disabled",false);
      $button.addClass("c-btn--yellow");
      $button.removeClass("c-btn--disabled");
    }
    else{
      $button.prop("disabled",true);
      $button.removeClass("c-btn--yellow");
      $button.addClass("c-btn--disabled");
    }
      
  });

});

