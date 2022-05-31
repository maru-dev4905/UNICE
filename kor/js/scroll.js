$(document).ready(function(){

    var header = $("header");
    var scrollTopBtn = $(".scrollTop_btn");

    $(window).scroll(function(){

        var winY = $(window).scrollTop();

        winY >= header.innerHeight() ? 
            header.addClass("scroll") :
            header.removeClass("scroll");

        winY >= $(window).innerHeight() ?
            scrollTopBtn.addClass("show") :
            scrollTopBtn.removeClass("show");
    });

});