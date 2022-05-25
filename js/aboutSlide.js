$(document).ready(function(){

    var aboutSwiper = new Swiper('.about_swiper', {

        slidesPerView: "auto",
        // slidesOffsetAfter: 40,
        spaceBetween: 40,
        
        
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        }

    });

});