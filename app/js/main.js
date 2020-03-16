    $(function () {

        $('.header__slider').slick({
            infinity: true,
            fade: true,
            prevArrow: '<img class="slider-arrows slider-arrows-left" src="img/arrows-left.svg">',
            nextArrow: '<img class="slider-arrows slider-arrows-right" src="img/arrows-right.svg">',
            asNavFor: '.slider-dotshead'

        });

        $('.slider-dotshead').slick({
            asNavFor: '.header-slider',
            slidesToShow: 4,
            slidesToScroll: 4
        });


        $('.serf-slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: '<img class="slider-arrows slider-arrows-left" src="img/arrows-left.svg">',
            nextArrow: '<img class="slider-arrows slider-arrows-right" src="img/arrows-right.svg">',
            asNavFor: '.slider-map'

        });

        $('.slider-map').slick({
            slidesToShow: 8,
            slidesToScroll: 1,
            arrows: false,
            asNavFor: '.serf-slider',
            focusOnSelect: true
        });

        $('.travel__slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<img class="slider-arrows slider-arrows-left" src="img/arrows-left.svg">',
            nextArrow: '<img class="slider-arrows slider-arrows-right" src="img/arrows-right.svg">',
            infinity: true,
            fade: true
        });




















    });