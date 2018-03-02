(function($) {
    "use strict";
    var slider = {
        elem: $('#myCarousel'),
        init: function() {
            this.DoAction();
        },
        DoAction: function() {
            this.elem.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                asNavFor: '.slider-nav'
            });

        }
    };
    window.slider = slider;
})(jQuery);

