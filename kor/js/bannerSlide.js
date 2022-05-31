$(document).ready(function(){

    var bannerSlide = $(".banner__img");
    var bannerSlideLength = bannerSlide.length;

    var slideCurrent = $(".slide__number .current");
    var slideTotal = $(".slide__number .total");

    if(bannerSlideLength > 10){
        slideTotal.text(bannerSlideLength);
    }else{
        slideTotal.text('0'+bannerSlideLength);
    }

    var idx = 0;

    var SLIDE_DELAY = 3500;

    setInterval(function(){
        
        
        if(idx > bannerSlideLength - 2){
            
            idx = 0;
            
            bannerSlide.removeClass("current");
            bannerSlide.eq(idx).addClass("current");
            
            
        }else{
            
            bannerSlide.removeClass("current");
            bannerSlide.eq(idx + 1).addClass("current");
            
            idx++;
            
        }

        if(bannerSlideLength > 10){
            slideCurrent.text(idx);
        }else{
            slideCurrent.text('0'+(idx+1));
        }

    },SLIDE_DELAY);
    
});