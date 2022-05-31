$(document).ready(function(){

    var fnbBtn = $(".fnb li");

    fnbBtn.click(function(){
        var th = $(this);
        console.log(th);
        
        if($(window).innerWidth() <= 500){
            // mo
            
            if(th.hasClass("active")){
                fnbBtn.removeClass("active");
            }else{
                fnbBtn.removeClass("active");
                th.addClass("active");
            }
            
        }else{
            // pc
            return false;
            
        }
    });
    
});