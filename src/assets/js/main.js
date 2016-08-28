window.jQuery = window.$ = $ = require('jquery');
require('./animation');

$(function() {

    //smooth scrolling on a # link
    $('a[href*="#"]:not([href="#"])').click(function() {
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

    //overlay modal for project images
    $('.portfolio_projectlist_project_imageslist_item img').on('click',function(e){
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
