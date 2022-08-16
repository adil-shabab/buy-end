var swiper = new Swiper(".mySwiper-2", {
    slidesPerView: 0.9,
    spaceBetween: 30,
    grabCursor: true,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
    // loop: true
  });



  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
       $('.navbar').addClass('small-box-shadow');
       $('.logo').css("width", "55px")
       $('.menu-icon').css("font-size","28px")
    } else {
       $('.navbar').removeClass('small-box-shadow');
       $('.logo').css("width", "100px")
       $('.menu-icon').css("font-size","38px")
    }
});