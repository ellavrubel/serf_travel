    $(function () {

        $('.header__slider').slick({
            infinity: true,
            fade: true,
            prevArrow: '<img class="slider-arrows slider-arrows-left" src="img/arrows-left.svg">',
            nextArrow: '<img class="slider-arrows slider-arrows-right" src="img/arrows-right.svg">',
            asNavFor: '.slider-dots'

        });

        $('.slider-dots').slick({
            asNavFor: '.header-slider',
            slidesToShow: 4,
            slidesToScroll: 4
        });




















    });