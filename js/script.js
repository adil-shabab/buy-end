var swiper = new Swiper(".mySwiper", {
    effect: "flip",
    grabCursor: true,
    autoplay: {
        delay: 8000,
        disableOnInteraction: false,
      },
    // loop: true,
  });


  var swiper = new Swiper(".mySwiper-2", {
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
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
       $('.logo').css("width", "75px")
    } else {
       $('.navbar').removeClass('small-box-shadow');
       $('.logo').css("width", "80px")

    }
});