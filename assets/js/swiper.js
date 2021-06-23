 var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        spaceBetween: 100,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        },
        // loop: true,
      });