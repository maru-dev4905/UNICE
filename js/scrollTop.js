$(document).ready(function(){

    var scrollTopBtn = $(".scrollTop_btn");
    
    scrollTopBtn.click(function(){
        
        window.scrollTo({ 
            top: 0,
            behavior: 'smooth' 
        })
    });
});