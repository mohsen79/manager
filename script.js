$(document).ready(function() {
    $("#bar").click(function() {
        $("#res").animate({
            left: 0
        });
        $("#res").show();
        $("body").append("<div class='back'></div>");
        $(".back").click(function() {
            $("#res").animate({
                left: -350
            });
            $("#res").hide(1000);
            $(this).remove();
        });
    });
    window.addEventListener("resize", function() {
        if ($(window).width() > 700) {} else {
            $("#res").css({ 'left': '-500px', 'display': 'none' });
            $(".back").remove();
        }
    });
});