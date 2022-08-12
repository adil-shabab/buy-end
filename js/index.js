button = document.querySelector('.show-more')
row = document.querySelector('.second-row')
showGalleryButton = document.querySelector('.show-gallery')

button.addEventListener('click', function(){
    console.log('clicked')

    row.classList.remove('not-active')
    showGalleryButton.classList.remove('d-flex-full')
    showGalleryButton.classList.add('d-none')
})


$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
       $('.navbar').addClass('shadow');
    } else {
       $('.navbar').removeClass('shadow');
    }
});
