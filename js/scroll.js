//jQuery to collapse the navbar on scroll
$(window).scroll(function () {

    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");

        $(".logo-size").css({
            "height": "60px",
            "width": "110px"
        });
        $("#hover-menu").removeClass("menu-1");
        $("#hover-menu").addClass("menu-2");

    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".logo-size").css({
            "height": "",
            "width": ""
        });
        $("#hover-menu").addClass("menu-1");
        $("#hover-menu").removeClass("menu-2");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});