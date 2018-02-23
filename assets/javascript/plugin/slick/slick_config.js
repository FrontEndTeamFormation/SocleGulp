$(document).ready(function () {
    $('.my-slider').slick({
        autoplay: true,
        accessibility: true,
        autoplaySpeed: 2000,
        //    arrows: true,
        dots: true,
        infinite: true,
        //speed: 500,
        //fade: true,
        //cssEase: 'linear'
    });
});

// On swipe event
$('.my-slider').on('swipe', function (event, slick, direction) {
    console.log(direction);
    // left
});

// On edge hit
$('.my-slider').on('edge', function (event, slick, direction) {
    console.log('edge was hit')
});
