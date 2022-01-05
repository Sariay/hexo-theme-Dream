$(document).ready(function() {
    'use strict';
    /*-----------------------------------------------------------------------------------*/
    /*	REVOLUTION
	/*-----------------------------------------------------------------------------------*/
    $("#slider1").revolution({
        sliderType: "standard",
        sliderLayout: "fullscreen",
        spinner: "spinner",
        gridwidth: [1140, 800, 750, 480],
        gridheight: [600, 600, 980, 700],
        responsiveLevels: [4096, 1024, 778, 480],
        delay: 6000,
        shadow: 0,
        navigation: {
            arrows: {
                enable: true,
                hide_onleave: true,
                left: {
                    h_align: "left",
                    v_align: "center",
                    h_offset: 0,
                    v_offset: 0,
                },
                right: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: 0,
                    v_offset: 0
                }
            },
            touch: {
                touchenabled: "on",
                swipe_treshold: 75,
                swipe_min_touches: 1,
                drag_block_vertical: false,
                swipe_direction: "horizontal"
            },
            bullets: {
                enable: false,
                hide_onleave: false,
                h_align: "center",
                v_align: "bottom",
                space: 5,
                h_offset: 0,
                v_offset: 20
            },
        }

    });

    $("#flow").revolution({
        sliderType: "carousel",

        sliderLayout: "fullscreen",
        dottedOverlay: "none",
        delay: 9000,
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            onHoverStop: "off",
        },
        carousel: {
            maxRotation: 5,
            vary_rotation: "off",
            minScale: 15,
            vary_scale: "off",
            horizontal_align: "center",
            vertical_align: "center",
            fadeout: "on",
            vary_fade: "on",
            maxVisibleItems: 3,
            infinity: "off",
            space: -80,
            stretch: "off"
        },
        responsiveLevels: [1240, 1024, 778, 480],
        gridwidth: [1024, 900, 778, 480],
        gridheight: [868, 768, 960, 720],
        lazyType: "none",
        shadow: 0,
        spinner: "off",
        stopLoop: "on",
        stopAfterLoops: 0,
        stopAtSlide: 1,
        shuffle: "off",
        autoHeight: "off",
        fullScreenAlignForce: "off",
        fullScreenOffsetContainer: "",
        fullScreenOffset: "",
        disableProgressBar: "on",
        hideThumbsOnMobile: "off",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: false,
        fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: false,
        }

    });
    /*-----------------------------------------------------------------------------------*/
    /*	LIGHTGALLERY
	/*-----------------------------------------------------------------------------------*/
    $('.light-gallery').lightGallery({
        thumbnail: true,
        selector: '.lgitem',
        animateThumb: true,
        showThumbByDefault: false,
        download: false,
        autoplayControls: false,
        thumbWidth: 100,
        thumbContHeight: 80
    });
   
    /*-----------------------------------------------------------------------------------*/
    /*	FOTORAMA
	/*-----------------------------------------------------------------------------------*/
    $('.fotorama').fotorama({
        spinner: {
            color: 'rgba(0, 0, 0, 0)'
        }
    });
    $('.fotorama-item').append(' ');
    /*-----------------------------------------------------------------------------------*/
    /*	ANIMSITION
    /*-----------------------------------------------------------------------------------*/
    var link = 'a:not([target="_blank"]):not([href*=#]):not([href^=mailto]):not(.button):not(.lgitem):not(.lgsingle)'
    $(".animsition").animsition({
        loadingClass: 'animsition-loading',
        linkElement: link,
        timeout: true,
        timeoutCountdown: 5000

    });
    $('.loading').hide(0).delay(50).fadeIn(50);
    /*-----------------------------------------------------------------------------------*/
    /*	OWL CAROUSEL
    /*-----------------------------------------------------------------------------------*/
    $('.specialties').owlCarousel({
        loop: false,
        margin: 5,
        nav: true,
        navText: ['', ''],
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2

            },
            992: {
                items: 3
            }
        }
    });
    $('.clients').owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        loop: true,
        margin: 50,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 3
            },
            768: {
                items: 5
            },
            1200: {
                items: 6
            }
        }
    });
    /*-----------------------------------------------------------------------------------*/
    /*	ISOTOPE PORTFOLIO GRID
	/*-----------------------------------------------------------------------------------*/
    var $portfoliogrid = $('.portfolio-grid .isotope');
    $portfoliogrid.isotope({
        itemSelector: '.item',
        transitionDuration: '0.7s'
    });
    $('.portfolio-grid .isotope-filter').on('click', '.button', function() {
        var filterValue = $(this).attr('data-filter');
        $portfoliogrid.isotope({
            filter: filterValue
        });
    });
    $('.portfolio-grid .button-group').each(function(i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', '.button', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });
    $portfoliogrid.imagesLoaded(function() {
        $portfoliogrid.isotope('layout');
    });
    /*-----------------------------------------------------------------------------------*/
    /*	TILES
    /*-----------------------------------------------------------------------------------*/
    $('.tiles .item figure img').resizeToParent({
        parent: '.tiles .item'
    });
    /*-----------------------------------------------------------------------------------*/
    /*	FITVIDS VIDEO
	/*-----------------------------------------------------------------------------------*/
    $('.player').fitVids();
    /*-----------------------------------------------------------------------------------*/
    /*	IMAGE ICON HOVER
	/*-----------------------------------------------------------------------------------*/
    $('figure.overlay a').prepend('<span class="over"></span>');
    /*-----------------------------------------------------------------------------------*/
    /* INPUT FOCUS
	/*-----------------------------------------------------------------------------------*/
    $('.comment-form input[title], .comment-form textarea').each(function() {
        if ($(this).val() === '') {
            $(this).val($(this).attr('title'));
        }

        $(this).focus(function() {
            if ($(this).val() == $(this).attr('title')) {
                $(this).val('').addClass('focused');
            }
        });
        $(this).blur(function() {
            if ($(this).val() === '') {
                $(this).val($(this).attr('title')).removeClass('focused');
            }
        });
    });
    /*-----------------------------------------------------------------------------------*/
    /*	PROGRESS BAR
	/*-----------------------------------------------------------------------------------*/
    $('.progress-list .progress .bar').progressBar({
        shadow: false,
        percentage: false,
        animation: true,
        height: 15
    });
    /*-----------------------------------------------------------------------------------*/
    /*	TABS
	/*-----------------------------------------------------------------------------------*/
    $('.tabs.tabs-top').easytabs({
        animationSpeed: 300,
        updateHash: false
    });
    /*-----------------------------------------------------------------------------------*/
    /*	TOGGLE
	/*-----------------------------------------------------------------------------------*/
    $('.panel-group').find('.panel-default:has(".in")').addClass('panel-active');
    $('.panel-group').on('shown.bs.collapse', function(e) {
        $(e.target).closest('.panel-default').addClass(' panel-active');
    }).on('hidden.bs.collapse', function(e) {
        $(e.target).closest('.panel-default').removeClass(' panel-active');
    });
    /*-----------------------------------------------------------------------------------*/
    /*	INSTAGRAM
    /*-----------------------------------------------------------------------------------*/
    var instagramFeed = new Instafeed({
        get: 'user',
        userId: 1215763826,
        accessToken: '1215763826.f1627ea.dad6ca96bd7642519b573d52c3ef467f',
        resolution: 'standard_resolution',
        template: '<div class="item"><figure class="overlay"><a href="{{link}}" target="_blank"><img src="{{image}}" /></a></figure></div>',
        after: function() {
            $('#instafeed figure.overlay a').prepend('<span class="over"></span>');
            $('#instafeed').owlCarousel({
                loop: false,
                margin: 0,
                nav: true,
                navText: ['', ''],
                dots: false,
                responsive: {
                    0: {
                        items: 3
                    },
                    768: {
                        items: 4
                    },
                    1000: {
                        items: 5
                    },
                    1680: {
                        items: 6
                    },
                    1920: {
                        items: 7
                    }
                }
            })
        }
    });
    $('#instafeed').each(function() {
        instagramFeed.run();
    });
    var instagramFeed2 = new Instafeed({
        target: 'instafeed-widget',
        get: 'user',
        limit: 6,
        userId: 1215763826,
        accessToken: '1215763826.f1627ea.dad6ca96bd7642519b573d52c3ef467f',
        resolution: 'low_resolution',
        template: '<div class="item col-xs-4 col-sm-6 col-md-4"><figure class="overlay"><a href="{{link}}" target="_blank"><img src="{{image}}" /></a></figure></div>',
        after: function() {
            $('#instafeed-widget figure.overlay a').prepend('<span class="over"></span>');
        }
    });
    $('#instafeed-widget').each(function() {
        instagramFeed2.run();
    });
    /*-----------------------------------------------------------------------------------*/
    /*	DATA REL
	/*-----------------------------------------------------------------------------------*/
    $('a[data-rel]').each(function() {
        $(this).attr('rel', $(this).data('rel'));
    });
    /*-----------------------------------------------------------------------------------*/
    /*	TOOLTIP
    /*-----------------------------------------------------------------------------------*/
    if ($("[rel=tooltip]").length) {
        $("[rel=tooltip]").tooltip();
    }
    /*-----------------------------------------------------------------------------------*/
    /*	PRETTIFY
	/*-----------------------------------------------------------------------------------*/
    window.prettyPrint && prettyPrint()
});