var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

var FeedSlider = new Swiper(".feed-content", {
    slidesPerView:3,
    spaceBetween: 25,
    loop: true,
    centerSlide:'true',
    fade:'true',
    grabCursor:true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520:{
            slidesPerView:2,
        },
        950:{
            slidesPerView: 3,
        }
    }
})