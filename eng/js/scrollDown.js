$(document).ready(function(){

    var scrollDownBtn = $(".scrollDown__btn");
    
    var aboutSection = $(".about_cont");

    scrollDownBtn.click(function(){
        
        window.scrollTo({ 
            top: aboutSection.offset().top, 
            behavior: 'smooth' 
        })
    });
});