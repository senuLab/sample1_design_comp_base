$(function(){
    $(".offcanvas-right").hiraku({
        btn:"#offcanvas-btn-right",
        direction:"right"
    });

    var mySwiper = new Swiper ('.swiper-container', {
        width:400,
        spaceBetween:40,

        breakpoints:{
            767:{
                width:274,
                spaceBetween:24,
            }
        },

        pagination: { 
            el: '.swiper-pagination', //ページネーションの要素
            type: 'bullets', //ページネーションの種類
            clickable: true, //クリックに反応させる
          },
    });

    $hamburger_open = $(".js-header__hamburger-btn--open");
    $hamburger_close = $(".js-header__hamburger-btn--close");

    $hamburger_open.on("click",function(){
        $(".js-header__hamburger-btn--open").toggleClass("is-active");
    }); 

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

    $('.p-header__nav-link').click(function () {

        $('body').css('position', 'static');
        $('body').css('overflow', 'scroll');
        $('body').css('overflow-y', 'scroll');


        let header = $(".l-header").innerHeight(); 
        /* let speed = 300; */
        let id = $(this).attr("href");
        let position = $(id).offset().top - header;
    
        $('body,html').animate({
          scrollTop: position
        }, 500);
        return false;
      });

      $('.p-to-top').click(function () {

        let header = $(".l-header").innerHeight(); 
        /* let speed = 300; */
        let id = $(this).attr("href");
        let position = $(id).offset().top - header;
    
        $('body,html').animate({
          scrollTop: position
        }, 500);
        return false;
      });

      let $input = $(".p-contact__input--required");
      let $button = $(".p-contact__btn");

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

