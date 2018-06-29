!function(){
  let mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    loop: true,
    autoplay: {
        delay: 6000,
        stopOnLastSlide: false,
        disableOnInteraction: false
        },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
   
  })
}.call()