$(document).ready(function(){

    if($(window).innerWidth() <= 500){
        // mo

    }else{
        // pc

        var partnerSwiper = new Swiper('.partner_swiper', {
            slidesPerView: 8,
            spaceBetween: 90,
            loop: true,
    
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
        });
    }
});