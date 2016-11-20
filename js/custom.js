$(window).load(function() {
        // Animate loader off screen
        $("body").removeClass("preload");
        $(".se-pre-con").fadeOut("fast");
    });
     $(function(){
        $(".element").typed({
            strings: ["Fast^2700", "Friendly^2700", "Honest^2700", "Smart^2700", "Cool^2700", "Simple^2700", "Free^2700"],
            loop: true,
            typeSpeed: 10
        });
    });
    function show(h0, h1, h2, h3, h4) {
    document.getElementById(h0).style.display='block';
    document.getElementById(h1).style.display='none';
    document.getElementById(h2).style.display='none';
    document.getElementById(h3).style.display='none';
    document.getElementById(h4).style.display='none';
    return false;
    }