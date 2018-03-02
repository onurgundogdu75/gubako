$(".responsiveNav").on("click", function () {
    $(".container nav ul").toggleClass("release");
});

$(function () {
    $('.navbar-toggle, nav').click(function () {
        if ($(window).width() < 640) {
            $('.navbar-toggle').toggleClass('navbar-on');
            $('nav').fadeToggle();
            $('nav').removeClass('nav-hide');
        } else {
        }
    });
});