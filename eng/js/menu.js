$(document).ready(function(){

    var menuOpenBtn = $(".menu__open__btn");
    var menu = $(".menu");
    var menuCloseBtn = $(".close__btn");
    var dim = $(".dim");

    menuOpenBtn.click(function(){

        menu.addClass("show");

        dim.addClass("show");
    });

    menuCloseBtn.click(function(){

        menu.removeClass("show");

        dim.removeClass('show');
    });

    dim.click(function(){

        menu.removeClass("show");
        
        dim.removeClass("show");
    });

});