$(document).ready(function(){
    
    var searchOpenBtn = $(".search__open__btn");
    var search = $(".search");
    var searchCloseBtn = $(".search_close_btn");

    searchOpenBtn.click(function(){
        search.addClass("show");
    });

    searchCloseBtn.click(function(){
        search.removeClass("show");
    });
});