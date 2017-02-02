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

    function show(h0, h1, h2, h3, h4, h5, h6) {
    document.getElementById(h0).style.display='block';
    document.getElementById(h1).style.display='none';
    document.getElementById(h2).style.display='none';
    document.getElementById(h3).style.display='none';
    document.getElementById(h4).style.display='none';
    document.getElementById(h5).style.display='none';
    document.getElementById(h6).style.display='none';
    return false;
    }

        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        ga('create', 'UA-90187445-1', 'auto');
        ga('send', 'pageview');
   
        (function(h,e,a,t,m,p) {
        m=e.createElement(a);m.async=!0;m.src=t;
        p=e.getElementsByTagName(a)[0];p.parentNode.insertBefore(m,p);
        })(window,document,'script','https://u.heatmap.it/log.js');
    
	// Parse the URL parameter
	function getParameterByName(name, url) {
	    if (!url) url = window.location.href;
	    name = name.replace(/[\[\]]/g, "\\$&");
	    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	        results = regex.exec(url);
	    if (!results) return null;
	    if (!results[2]) return '';
	    return decodeURIComponent(results[2].replace(/\+/g, " "));
	}

	// Give the parameter a variable name
	var dynamicContent = getParameterByName('dc');
	$(document).ready(function() {
		if (dynamicContent == 'about') {
			$('#landing').hide();
			$('#about').show();
            $('#contact').hide();
            $('#people').hide();
            $('#recruitment').hide();
			$('#thanks').hide();
			$('#thanks2').hide();
		} 
		else if (dynamicContent == 'contact') {
			$('#landing').hide();
			$('#about').hide();
            $('#contact').show();
            $('#people').hide();
            $('#recruitment').hide();
			$('#thanks').hide();
			$('#thanks2').hide();
		} 
		else if (dynamicContent == 'people' || dynamicContent == 'team') {
			$('#landing').hide();
			$('#about').hide();
            $('#contact').hide();
            $('#people').show();
            $('#recruitment').hide();
			$('#thanks').hide();
			$('#thanks2').hide();
		} 
		else if (dynamicContent == 'recruitment' || dynamicContent == 'apply') {
 			$('#landing').hide();
			$('#about').hide();
            $('#contact').hide();
            $('#people').hide();
            $('#recruitment').show();
			$('#thanks').hide();
			$('#thanks2').hide();
		} else if (dynamicContent == 'thanks') {
 			$('#landing').hide();
			$('#about').hide();
            $('#contact').hide();
            $('#people').hide();
            $('#recruitment').hide();
			$('#thanks').show();
			$('#thanks2').hide();
		} else if (dynamicContent == 'thanks2') {
 			$('#landing').hide();
			$('#about').hide();
            $('#contact').hide();
            $('#people').hide();
            $('#recruitment').hide();
			$('#thanks2').show();
			$('#thanks').hide();
		} 
		else {
            $('#landing').show();
		$('#about').hide();
            $('#contact').hide();
            $('#people').hide();
            $('#recruitment').hide();
			$('#thanks').hide();
			$('#thanks2').hide();
		}
	});
