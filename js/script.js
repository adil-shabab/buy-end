

function myFunction() {
  myVar = setTimeout(showPage, 700);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.querySelector(".body").style.display = "block";
}

myFunction()





// home swiper 
var swiper = new Swiper(".mySwiper", {
  effect: "flip",
  grabCursor: true,
  autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    },
  loop: true,
});



menubar = document.querySelector('.menu-icon')
closebar = document.querySelector('.close-icon')
ul = document.querySelector('.nav-ul')
menubar.addEventListener('click', function(){
  // alert('hai')
  menubar.style.display = "none"
  closebar.style.display = "block"
  ul.classList.add('active')
  
  console.log('hello')
})
closebar.addEventListener('click', function(){
  // alert('hai')
  closebar.style.display = "none"
  menubar.style.display = "block"
  console.log('hello')
  ul.classList.remove('active')
  
})
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
    slidesPerView: 2,
    spaceBetween: 30,
    grabCursor: true,
    autoplay: {
      delay: 900,
      disableOnInteraction: false
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
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

//     } else {