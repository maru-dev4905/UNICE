$(document).ready(function(){
    
    var searchOpenBtn = $(".search__open__btn");
    var search = $(".search");
    var searchCloseBtn = $(".search_close_btn");
    var dim = $(".dim");

    searchOpenBtn.click(function(){
        search.addClass("show");
        
        dim.addClass("show");
    });

    searchCloseBtn.click(function(){
        search.removeClass("show");
        
        dim.removeClass("show");
    });

    dim.click(function(){
        search.removeClass("show");

        dim.removeClass("show");
    });
});