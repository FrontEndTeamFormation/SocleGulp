(function($) {
    "use strict";
    var test = {
        elem: $('.test'),
        init: function() {
            this.DoAction();
        },
        DoAction: function() {
            this.elem.on('click', function(e) {
                console.log("do action");
            });
        }
    };
    window.test = test;
})(jQuery);