(function () {
    // Init reviews slick slider
    $('.reviews-slick-slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    // Init nav menu toggle
    $('.menu-toggle').on('click', function () {
        $(this).toggleClass('--active');
        $('.main-nav').toggleClass('--active');
    });
})();
