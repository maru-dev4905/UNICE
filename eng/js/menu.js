$(document).ready(function(){

    var menuOpenBtn = $(".menu__open__btn");
    var menu = $(".menu");
    var menuCloseBtn = $(".close__btn");

    menuOpenBtn.click(function(){

        menu.addClass("show");

    });

    menuCloseBtn.click(function(){

        menu.removeClass("show");

    });

});