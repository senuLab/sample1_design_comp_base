$(function(){
    $(".offcanvas-right").hiraku({
        btn:"#offcanvas-btn-right",
        direction:"right"
    });

    var mySwiper = new Swiper ('.swiper-container', {
        pagination: { 
            el: '.swiper-pagination', //ページネーションの要素
            type: 'bullets', //ページネーションの種類
            clickable: true, //クリックに反応させる
          },
    });

    /* $hamburger = $(".js-header__hamburger-btn");

    $hamburger.on("click",function(){
        $(".js-header__hamburger-btn--open").toggleClass("is-active");
        $(".js-header__hamburger-btn--close").toggleClass("is-active");
    }); */
});
