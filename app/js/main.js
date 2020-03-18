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

        $('.holder__slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<img class="slider-arrows slider-arrows-left" src="img/arrows-left.svg">',
            nextArrow: '<img class="slider-arrows slider-arrows-right" src="img/arrows-right.svg">',
            infinity: true,
            fade: true
        });

        $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/sleep-plus.png" alt=""></div><div class="quantity-button quantity-down"><img src="img/sleep-minus.png" alt=""></div></div>').insertAfter('.quantity input');
        $('.quantity').each(function() {
            var spinner = $(this),
                input = spinner.find('input[type="number"]'),
                btnUp = spinner.find('.quantity-up'),
                btnDown = spinner.find('.quantity-down'),
                min = input.attr('min'),
                max = input.attr('max');

            btnUp.click(function() {
                var oldValue = parseFloat(input.val());
                if (oldValue >= max) {
                    var newVal = oldValue;
                } else {
                    var newVal = oldValue + 1;
                }
                spinner.find("input").val(newVal);
                spinner.find("input").trigger("change");
            });

            btnDown.click(function() {
                var oldValue = parseFloat(input.val());
                if (oldValue <= min) {
                    var newVal = oldValue;
                } else {
                    var newVal = oldValue - 1;
                }
                spinner.find("input").val(newVal);
                spinner.find("input").trigger("change");
            });

        });




















    });