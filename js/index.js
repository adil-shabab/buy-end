button = document.querySelector('.show-more')
row = document.querySelector('.second-row')
showGalleryButton = document.querySelector('.show-gallery')


banner =  document.querySelector('.attached-banner')

button.addEventListener('click', function(){
    console.log('clicked')

    banner.classList.remove('d-none')
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
