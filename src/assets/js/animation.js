window.jQuery = window.$ = $ = require('jquery');
require('./Velocity');

$(function() {
    //$.Velocity.mock = 5;

    //logo
    $Na = $("#Na");
    $Nb = $("#Nb");
    $Ta = $("#Ta");
    $Tb = $("#Tb");
    $logoBlock = $('.header_logo');

    $header = $('.header');

    $header.on('mouseenter',function enter(){
        $Na.velocity("stop",true).velocity({translateX : -132.5},{delay:0, duration:300});
        $Nb.velocity("stop",true).velocity({translateY : -230},{delay:300, duration:300});
        $Ta.velocity("stop",true).velocity({translateY : -230},{delay:500, duration:300});
        $Tb.velocity("stop",true).velocity({translateX : 225},{delay:0, duration:400}).velocity({translateX : 105},{delay:400, duration:300});
        $logoBlock.velocity({ height: '30vh', paddingTop: '5vh', paddingBottom: 0 }, { delay: 500, duration: 1500 });
    });

    $header.on('mouseleave',function leave(){
        //$header_logo.velocity("stop",true).velocity({paddingLeft:0,paddingRight:0},{delay:0, duration:200});
        $Na.velocity("stop",true).velocity({translateX:- 150},{delay:800, duration:200}).velocity({translateX:0},{delay:100, duration:400});
        $Nb.velocity("stop",true).velocity({translateY:0},{delay:300, duration:230});
        $Ta.velocity("stop",true).velocity({translateY:0},{delay:600, duration:300});
        $Tb.velocity("stop",true).velocity({translateX : -150},{delay:400, duration:400}).velocity({translateX : 0},{delay:200, duration:300});
    });


    //mobile nav animation
    $links = $('.header_menu_links a');
    $button = $('.mobile-button');

    $button.on('click',function mobileAnim(e){
        $Na.velocity("stop",true).velocity({translateX : -132.5},{delay:0, duration:300});
        $Nb.velocity("stop",true).velocity({translateY : -230},{delay:300, duration:300});
        $Ta.velocity("stop",true).velocity({translateY : -230},{delay:500, duration:300});
        $Tb.velocity("stop",true).velocity({translateX : 225},{delay:0, duration:400}).velocity({translateX : 105},{delay:400, duration:300});
        $logoBlock.velocity({ height: '30vh', paddingTop: '5vh', paddingBottom: 0, marginBottom: '-2em'}, { delay: 500, duration: 1500 });
        $button.unbind('click',mobileAnim);
    });


    $button.on('click',function(e){
        $button.toggleClass('mobile-button--rotate');
        $header.toggleClass('mobile');

        $links.on('click',function mobile(){
            $header.removeClass('mobile');
            $button.removeClass('mobile-button--rotate');
            $links.unbind('click',mobile);
        })
    });

    //logo link + smooth scrolling
    $(".header_logo_svg").on('click',function(e){
        $('.avatar').velocity("scroll", { duration: 1200, easing: "ease-in-out" });
        $header.removeClass('mobile');
        $button.removeClass('mobile-button--rotate');
    })

    //avatar blinking
    //$eyes = $(".eyes");
    //$eyes.css('transform-origin','50% 50%');
    //
    //$('div.right').on('mouseenter',function(){
    //    $eyes.velocity("stop",true).velocity({scaleY: 0.1},{delay:0, duration:0});
    //    //$Nb.velocity("stop",true).velocity({translateY : -230},{delay:300, duration:300});
    //    //$Ta.velocity("stop",true).velocity({translateY : -230},{delay:500, duration:300});
    //    //$Tb.velocity("stop",true).velocity({translateX : 225},{delay:0, duration:400}).velocity({translateX : 105},{delay:400, duration:300});
    //});

});