$(function() {

    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    $Na = $("#Na");
    $Nb = $("#Nb");
    $Ta = $("#Ta");
    $Tb = $("#Tb");

    $('div.left').on('mouseenter',function(){
        $Na.velocity("stop",true).velocity({translateX : -132.5},{delay:0, duration:300});
        $Nb.velocity("stop",true).velocity({translateY : -230},{delay:300, duration:300});
        $Ta.velocity("stop",true).velocity({translateY : -230},{delay:500, duration:300});
        $Tb.velocity("stop",true).velocity({translateX : 225},{delay:0, duration:400}).velocity({translateX : 105},{delay:400, duration:300});
    });

    $('div.left').on('mouseleave',function(){
        $Na.velocity("stop",true).velocity({translateX:-200},{delay:350, duration:300}).velocity({translateX:0},{delay:0, duration:300});
        $Nb.velocity("stop",true).velocity({translateY:0},{delay:0, duration:230});
        $Ta.velocity("stop",true).velocity({translateY:0},{delay:300, duration:300});
        $Tb.velocity("stop",true).velocity({translateX : -140},{delay:0, duration:400}).velocity({translateX : 0},{delay:200, duration:300});
    });


    $eyes = $(".eyes");
    $eyes.css('transform-origin','50% 50%');

    $('div.right').on('mouseenter',function(){
        $eyes.velocity("stop",true).velocity({scaleY: 0.1},{delay:0, duration:0});
        //$Nb.velocity("stop",true).velocity({translateY : -230},{delay:300, duration:300});
        //$Ta.velocity("stop",true).velocity({translateY : -230},{delay:500, duration:300});
        //$Tb.velocity("stop",true).velocity({translateX : 225},{delay:0, duration:400}).velocity({translateX : 105},{delay:400, duration:300});
    });


    //$.Velocity.mock = 5;

});