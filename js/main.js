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
    $logo = $("#logo");
    $logo_wrapper = $('.logo-wrapper');
    $titles = $(".titles");

    $('nav').on('mouseenter',function(){
        $Na.velocity("stop",true).velocity({translateX : -132.5},{delay:0, duration:300});
        $Nb.velocity("stop",true).velocity({translateY : -230},{delay:300, duration:300});
        $Ta.velocity("stop",true).velocity({translateY : -230},{delay:500, duration:300});
        $Tb.velocity("stop",true).velocity({translateX : 225},{delay:0, duration:400}).velocity({translateX : 105},{delay:400, duration:300});
        $logo_wrapper.velocity({ height: '30vh', paddingTop: '5vh', paddingBottom: 0 }, { delay: 500, duration: 1500 });
        //$titles.velocity({height:"100%"},{delay:0, duration:500});
    });

    $('nav').on('mouseleave',function(){
        //$logo_wrapper.velocity("stop",true).velocity({paddingLeft:0,paddingRight:0},{delay:0, duration:200});
        $Na.velocity("stop",true).velocity({translateX:- 150},{delay:800, duration:200}).velocity({translateX:0},{delay:100, duration:400});
        $Nb.velocity("stop",true).velocity({translateY:0},{delay:300, duration:230});
        $Ta.velocity("stop",true).velocity({translateY:0},{delay:600, duration:300});
        $Tb.velocity("stop",true).velocity({translateX : -150},{delay:400, duration:400}).velocity({translateX : 0},{delay:200, duration:300});
    });


    $logo.on('click',function(e){
        $('header').velocity("scroll", { duration: 1200, easing: "ease-in-out" });
    })

    $eyes = $(".eyes");
    $eyes.css('transform-origin','50% 50%');

    $('div.right').on('mouseenter',function(){
        $eyes.velocity("stop",true).velocity({scaleY: 0.1},{delay:0, duration:0});
        //$Nb.velocity("stop",true).velocity({translateY : -230},{delay:300, duration:300});
        //$Ta.velocity("stop",true).velocity({translateY : -230},{delay:500, duration:300});
        //$Tb.velocity("stop",true).velocity({translateX : 225},{delay:0, duration:400}).velocity({translateX : 105},{delay:400, duration:300});
    });

    $('.fa-user').on('click',function(){
        $('nav').toggleClass('mobile');
        $Na.velocity("stop",true).velocity({translateX : -132.5},{delay:0, duration:300});
        $Nb.velocity("stop",true).velocity({translateY : -230},{delay:300, duration:300});
        $Ta.velocity("stop",true).velocity({translateY : -230},{delay:500, duration:300});
        $Tb.velocity("stop",true).velocity({translateX : 225},{delay:0, duration:400}).velocity({translateX : 105},{delay:400, duration:300});
        $logo_wrapper.velocity({ height: '30vh', paddingTop: '5vh', paddingBottom: 0 }, { delay: 500, duration: 1500 });

    })



    //$.Velocity.mock = 5;

});