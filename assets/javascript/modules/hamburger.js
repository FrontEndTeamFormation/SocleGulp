$( document ).ready(function() {

    $(window).resize(function() {
        if (document.documentElement.clientWidth <= 750) {
                    $(".hamburger").show();
                    $( ".hamburger" ).click(function() {
                        $( ".menu" ).slideToggle( "slow", function() {
                            $( ".hamburger" ).hide();
                            $( ".cross" ).show();
                        });
                    });

                    $( ".cross" ).click(function() {
                        $( ".menu" ).slideToggle( "slow", function() {
                            $( ".cross" ).hide();
                            $( ".hamburger" ).show();
                        });
                    });

        }else{
            $( ".cross" ).hide();
            $( ".menu" ).hide();
            $(".hamburger").hide();
        }
    }).resize()



});