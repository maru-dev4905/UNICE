$(document).ready(function(){

    var aboutSwiper = new Swiper('.about_swiper', {

        slidesPerView: "auto",
        spaceBetween: 15,
        
        
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },

        breakpoints: {
        
          500: {
            spaceBetween: 40,
          },
        },
    });

});