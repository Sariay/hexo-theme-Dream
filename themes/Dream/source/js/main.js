/*
 * 2018.8.26 by lcc
 * Based on some unknow sources, thanks for their open sources! Also, Relevant rights reserved by them!
 */
jQuery(document).ready(function($) {

	"use strict";

	// nav
	var Malory_Nav = function() {
		$('.btn-nav').on('click tap', function() {
			$('body').toggleClass('fixed-body');

			$('.nav-content').toggleClass('showNav hideNav').removeClass('hidden');
			$(this).toggleClass('animated');

			$('.nav .logo').toggleClass('fixed-logo');
			$('.nav .btn-nav').toggleClass('fixed-btnav');
		});
	};

	//niceScroll
	var Malory_NiceScrollSetting = function() {
		$("html").niceScroll({
			zindex: 8,
			autohidemode: "hidden"
		});
	};

	//fancybox
	var Malory_FancyboxSetting = function() {
		if($('#post-page').length) {
			$('[data-fancybox="gallery"]').fancybox({
				loop: true,
				buttons: [
					"zoom",
					"share",
					"slideShow",
					"fullScreen",
					//"download",
					"thumbs",
					"close"
				],
				protect: false
			});
		}
	};

	//show tilte for post-page
	var Malory_ShowPostTitle = function() {
		$(window).scroll(function() {
			var scrollTop = $(document).scrollTop(),
				upperLimit = 200,
				titleID = $('#top-post-title');

			if(scrollTop > upperLimit) {
				titleID.show();
			} else {
				titleID.hide();
			}
		}).trigger('scroll')
	};

	//Progress for all-page
	var Malory_ShowProgress = function() {
		
		$(window).scroll(function() {
			var scrollTo = $(window).scrollTop(),
				docHeight = $(document).height(),
				windowHeight = $(window).height(),
				scrollPercent = 0;

			scrollPercent = (scrollTo / (docHeight - windowHeight)) * 100;

			scrollPercent = scrollPercent.toFixed(1);

			if(scrollPercent > 100 || scrollPercent < 0) {
				scrollPercent = 100;
			}

			$('#progress-percentage h1').text(scrollPercent + "%");

			$("#progress-bar").attr("style", "width: " + (scrollPercent) + "%; display: block;");
		}).trigger('scroll');
		
	};
	
	//Initialize
	(function Malory_Init() {
		Malory_Nav();
		Malory_NiceScrollSetting();
		Malory_FancyboxSetting();
		Malory_ShowPostTitle();
		Malory_ShowProgress();
	})();
});