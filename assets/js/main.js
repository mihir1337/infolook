(function ($) {
	"use strict";

    jQuery(document).ready(function($){

      new fullpage('#fullpage', {
        licenseKey: '',
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


            $('.popup-class').magnificPopup({
              type: 'iframe',
              iframe: {
              markup: '<div class="mfp-iframe-scaler">'+
                        '<div class="mfp-close"></div>'+
                        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                      '</div>',

              patterns: {
                youtube: {
                  index: 'youtube.com/',

                  id: 'v=',

                  src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                },
                vimeo: {
                  index: 'vimeo.com/',
                  id: '/',
                  src: '//player.vimeo.com/video/%id%?autoplay=1'
                },
                gmaps: {
                  index: '//maps.google.',
                  src: '%id%&output=embed'
                }


              },

              srcAction: 'iframe_src',
            }
              // other options
            });


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