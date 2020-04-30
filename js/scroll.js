$(document).ready(function(){
    $(window).on('scroll', function () {
    
    var txt   = $('.scroll');
    var topImg = $('.scroll').offset().top;
    var scroll = $(window).scrollTop();
    
        $(txt).each(function() {
            
            var topImg = $(this).offset().top - 700;
            
                if ( topImg < scroll ) {
                
                $(this).css("transform", "translate(0,0)");
                $(this).css("opacity", "1");
                
                };
        });
    });
});