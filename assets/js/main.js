(function ($) {
	"use strict";

    jQuery(document).ready(function($){

      new fullpage('#fullpage', {
        sectionsColor: ['#24384c', '#ffffff', '#f7f7f7', '#ffffff', '#f7f7f7', '#15202b', '#24384c', '#15202b', '#e4e7e9', '#f6f6f6'],
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage', '6thPage', '7thPage', '8thPage', '9thPage', '10thPage', ],
        navigation: true,
        navigationTooltips: [],
        showActiveTooltip: true,
        scrollingSpeed: 800,
        autoScrolling: false,
        menu: '#menu'
      });

        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        
            $('#mobile-menu-active').meanmenu({
                meanScreenWidth: "767",
                meanMenuContainer: '.menu-prepent',
            });



        $('.menu-open').click( function (){
                  
                $('.body-left-bar').toggleClass('activee');  
                $('.menu-open').toggleClass('toggle');  
        });

        // Activate lightcase
        $('a[data-rel^=lightcase]').lightcase();


// other options



// addclass & removeclass
    $(".sideicon").on("click", function() {

        $(".overlayed, .sidebarlists").addClass("actives");
    });



    $(".overlayed, .crossbars").on("click", function() {

        $(".sidebarlists, .overlayed").removeClass("actives");
    });

// addclass & removeclass

    });

    	// menu options custom affix
    	var fixed_top = $(".mainmenu-area");
    	$(window).on("scroll", function () {
    	  if ($(window).scrollTop() > 70) {
    	    fixed_top.addClass("animated fadeInDown sticky");
    	  } else {
    	    fixed_top.removeClass("animated fadeInDown sticky");
    	  }
    	});


    jQuery(window).load(function(){


    });


}(jQuery));	