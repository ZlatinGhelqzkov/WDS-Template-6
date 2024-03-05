const testimonialsSwiper = new Swiper('.testimonials-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1.2,
    spaceBetween: 15,
    centeredSlides: true,
    breakpoints:{
      768:{
        slidesPerView: 1.5,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 2.5,
        spaceBetween: 35,
      },
      1400: {
        slidesPerView: 3.5,
      }
    },
  });