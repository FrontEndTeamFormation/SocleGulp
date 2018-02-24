(function($) {
    "use strict";
    var slick = {
        elem: $('.slideshow'),
        init: function() {
            this.DoAction();
        },
        DoAction: function() {
            this.elem.slick({
                autoplay: true,
                dots: true,
                speed: 300,
                slidesToShow: 1
            });
        }
    };
    window.slick = slick;
})(jQuery);