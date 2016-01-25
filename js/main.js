$(function() {
    //$.Velocity.mock = 5;

    //smooth scrolling
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

    //logo link + smooth scrolling
    $(".header_logo_svg").on('click',function(e){
        $('.avatar').velocity("scroll", { duration: 1200, easing: "ease-in-out" });
    })

    //svg logo animation
    $Na = $("#Na");
    $Nb = $("#Nb");
    $Ta = $("#Ta");
    $Tb = $("#Tb");
    $header_logo = $('.header_logo');
    $titles = $(".titles");
    $header = $('.header');
    $links = $('.header_menu_links a');

    $header.on('mouseenter',function(){
        $Na.velocity("stop",true).velocity({translateX : -132.5},{delay:0, duration:300});
        $Nb.velocity("stop",true).velocity({translateY : -230},{delay:300, duration:300});
        $Ta.velocity("stop",true).velocity({translateY : -230},{delay:500, duration:300});
        $Tb.velocity("stop",true).velocity({translateX : 225},{delay:0, duration:400}).velocity({translateX : 105},{delay:400, duration:300});
        $header_logo.velocity({ height: '30vh', paddingTop: '5vh', paddingBottom: 0 }, { delay: 500, duration: 1500 });
        //$titles.velocity({height:"100%"},{delay:0, duration:500});
    });

    $header.on('mouseleave',function(){
        //$header_logo.velocity("stop",true).velocity({paddingLeft:0,paddingRight:0},{delay:0, duration:200});
        $Na.velocity("stop",true).velocity({translateX:- 150},{delay:800, duration:200}).velocity({translateX:0},{delay:100, duration:400});
        $Nb.velocity("stop",true).velocity({translateY:0},{delay:300, duration:230});
        $Ta.velocity("stop",true).velocity({translateY:0},{delay:600, duration:300});
        $Tb.velocity("stop",true).velocity({translateX : -150},{delay:400, duration:400}).velocity({translateX : 0},{delay:200, duration:300});
    });


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


    //mobile nav animation
    $('.mobile-button').on('click',function(){
        $nav.toggleClass('mobile');
        $Na.velocity("stop",true).velocity({translateX : -132.5},{delay:0, duration:300});
        $Nb.velocity("stop",true).velocity({translateY : -230},{delay:300, duration:300});
        $Ta.velocity("stop",true).velocity({translateY : -230},{delay:500, duration:300});
        $Tb.velocity("stop",true).velocity({translateX : 225},{delay:0, duration:400}).velocity({translateX : 105},{delay:400, duration:300});
        $header_logo.velocity({ height: '30vh', paddingTop: '5vh', paddingBottom: 0, marginBottom: '-2em'}, { delay: 500, duration: 1500 });

        $links.on('click',function mobile(){
            $header.toggleClass('mobile');
            $links.unbind('click',mobile);
        })
    })


    //overlay modal for project images
    $('.portfolio_list_project_images img').on('click',function(e){
        var $overlay = $('<div class="overlay"></div>');
        var $div= $('<div>');
        var $img = '<img class="overlay_img" src="'+$(this).attr("src")+'" alt="'+$(this).attr("alt")+'">';

        $div.append($img);
        $overlay.append($div);
        $('body').append($overlay);
        $overlay.hide();

        $overlay.fadeIn(100);

        $overlay.on('click', function(evt) {
            $overlay.fadeOut(100);
        });
    })

});