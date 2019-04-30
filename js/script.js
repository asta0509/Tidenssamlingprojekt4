$(document).ready(function () {
    $("#nav-forside").click(function () {
        $('html, body').animate({
            scrollTop: $("#nyheder").offset().top
        }, 2000);
    });
    $("#nav-udstillinger").click(function () {
        $('html, body').animate({
            scrollTop: $("#udstillinger").offset().top
        }, 2000);
    });
    $("#nav-samling").click(function () {
        $('html, body').animate({
            scrollTop: $("#samling").offset().top
        }, 2000);
    });
    
    $("#nav-samling_om").click(function () {
        $('html, body').animate({
            scrollTop: $("#samling_om").offset().top
        }, 2000);
    });
});
