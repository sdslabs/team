	jQuery(document).ready(function($) {

    var pathname = "/";

		var slide = 0;
		var routes = {
			"/": "root",
			"/designers": "designers",
			"/developers": "developers",
			"/alumni": "alumni",
			"/alumni/india": "alumni/india",
			"/alumni/usa": "alumni/usa"
		};

		var pageUrls = {
			0 : "/",
			1 : "/designers",
			2 : "/developers",
			3 : "/alumni",
			4 : "/alumni/india",
			5 : "/alumni/usa"
		};

		var designerVennButton = $('#designer-venn-button');
		var developerVennButton = $('#developer-venn-button');
		var navUpButton = $('.nav-up-container');
		var navDownButton = $('#nav-down-button');
		var crossButton = $('.cross-button');
		var crossButtonRe = $('.nav-cross-container');
		var pageContainer = $('.page-container');
		var designerSideBar = $('#designer-side-bar');
		var developerSideBar = $('#developer-side-bar');
		var svgIcon = $('#svg-icon');
		var svgIconUsa = $('#svg-icon-usa');
		var mainpageElements = $('.mainpage-elements');
		var designerpageElements = $('.designerpage-elements');
		var developerpageElements = $('.developerpage-elements');
		var alumnilocationpageElements = $('.alumnilocationpage-elements');
		var alumnipageElements = $('.alumnipage-elements');
		var logo = $('#icon');

		var pages = pageContainer.children('.page');

		function matchUrl(url){
      var matched = false;

			for (var index in routes)
			{
				if(url==index)
				{
          matched = true;
					if(url !== pathname) {
						// window.history.pushState(null, null, url);
            pathname = url;
					}
					for(var key in pageUrls){
						if(pageUrls[key] === index){
							updateSlide(parseInt(slide), parseInt(key));
							break;
						}
					}
				}
			}

      if (!matched) {
        matchUrl(pageUrls[0]);
      }
		}

		function display(index) {
			$(pages[index]).removeClass('hidden');
			$(pages[index]).addClass('selected');
			$(pages[index-1]).removeClass('selected');
			$(pages[index-1]).addClass('hidden');
			$(pages[index-2]).removeClass('selected');
			$(pages[index-2]).addClass('hidden');
			$(pages[index-3]).removeClass('selected');
			$(pages[index-3]).addClass('hidden');
			$(pages[index-4]).removeClass('selected');
			$(pages[index-4]).addClass('hidden');
			$(pages[index+1]).removeClass('selected');
			$(pages[index+1]).addClass('hidden');
			$(pages[index+2]).removeClass('selected');
			$(pages[index+2]).addClass('hidden');
			$(pages[index+3]).removeClass('selected');
			$(pages[index+3]).addClass('hidden');
			$(pages[index+4]).removeClass('selected');
			$(pages[index+4]).addClass('hidden');

		}

		// window.onpopstate =function(event) {
		// 	matchUrl(window.location.pathname);
		// 	event.preventDefault();
		// }

		$.fn.extend({
		    animateCss: function (animationName) {
		        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		        this.addClass('animated ' + animationName).one(animationEnd, function() {
		            $(this).removeClass('animated ' + animationName);
		        });
		        return this;
		    }
		});

		function updateSlide(prevSlideIndex, nextSlideIndex) {
			if (nextSlideIndex !== 4) {
				$('.nav-cross-container').hide();
			}

			if (nextSlideIndex !== 3) {
				$('.nav-up-container').hide();
			}

			if(prevSlideIndex === 0 && nextSlideIndex === 0) {
				$(pages[0]).addClass('selected');
			}

			if(prevSlideIndex === 0 && nextSlideIndex === 1) {
				$('.mainpagetext').animateCss('fadeOut');
				$('#designer-venn-button').toggle('circle-animate-in');
				$('#developer-venn-button').toggle('circle-animate-in');
				$('#left-top').toggle('descriptions-animate-in');
				$('#left-middle').toggle('descriptions-animate-in');
				$('#left-bottom').toggle('descriptions-animate-in');
				$('#right-top').toggle('descriptions-animate-in');
				$('#right-middle').toggle('descriptions-animate-in');
				$('#right-bottom').toggle('descriptions-animate-in');
				$('.bordertextds').show();
				setTimeout(delay01, 700);
				function delay01(){
					$(pages[prevSlideIndex]).removeClass('selected');
					$(pages[nextSlideIndex]).addClass('selected');
					$('#developer-side-bar').animate({left: '90%', opacity: '0.75', width: '10vw'});
					$('#headings-ds').animate({top: '14rem'});
					$('#horizontalrule-ds').animate({width: '6.5%'});
					$('.designerpage-elements').animateCss('zoomIn');

				}
			}

			else if(prevSlideIndex == 1 && nextSlideIndex == 0) {
				$('.designerpage-elements').animateCss('zoomOut');
				$('#developer-side-bar').animate({left: '50%', opacity: '0.05', width: '50vw'});
				$('#headings-ds').animate({top: '15rem'});
				$('#horizontalrule-ds').animate({width: '0%'});
				$('.bordertextds').hide();
				setTimeout(delay10, 300);
				function delay10(){
				$(pages[prevSlideIndex]).removeClass('selected');
				$(pages[nextSlideIndex]).addClass('selected');
				$('#left-top').toggle('descriptions-animate-out');
				$('#left-middle').toggle('descriptions-animate-out');
				$('#left-bottom').toggle('descriptions-animate-out');
				$('#right-top').toggle('descriptions-animate-out');
				$('#right-middle').toggle('descriptions-animate-out');
				$('#right-bottom').toggle('descriptions-animate-out');
				$('#designer-venn-button').toggle('circle-animate-out');
				$('#developer-venn-button').toggle('circle-animate-out');
				$('.mainpagetext').animateCss('fadeIn');
				}
			}

			else if(prevSlideIndex == 0 && nextSlideIndex == 2) {
				$('#designer-venn-button').toggle('circle-animate-in');
				$('#developer-venn-button').toggle('circle-animate-in');
				$('#left-top').toggle('descriptions-animate-in');
				$('#left-middle').toggle('descriptions-animate-in');
				$('#left-bottom').toggle('descriptions-animate-in');
				$('#right-top').toggle('descriptions-animate-in');
				$('#right-middle').toggle('descriptions-animate-in');
				$('#right-bottom').toggle('descriptions-animate-in');
				$('.bordertext-dv').show();
				setTimeout(delay02, 700);

				function delay02() {
					$(pages[prevSlideIndex]).removeClass('selected');
					$(pages[nextSlideIndex]).addClass('selected');
					$('#headings-dv').animate({top: '14rem'});
					$('.mainpagetext').animate({top: '69.14vh'});
					$('#horizontalrule-dv').animate({width: '5%'});
					$('#designer-side-bar').animate({left: '0%', opacity: '1', width: '10vw'});
					$('.developerpage-elements').animateCss('zoomIn');
				}
			}

			else if(prevSlideIndex == 2 && nextSlideIndex == 0) {
				$('.developerpage-elements').animateCss('zoomOut');
				$('#designer-side-bar').animate({left: '0vw', opacity: '0.05', width: '50vw'});
				$('#horizontalrule-dv').animate({width: '0%'});
				$('#headings-dv').animate({top: '15rem'});
				$('.bordertext-dv').hide();
				setTimeout(delay20, 300);
				function delay20(){
					$(pages[prevSlideIndex]).removeClass('selected');
					$(pages[nextSlideIndex]).addClass('selected');
					$('#left-top').toggle('descriptions-animate-out');
					$('#left-middle').toggle('descriptions-animate-out');
					$('#left-bottom').toggle('descriptions-animate-out');
					$('#right-top').toggle('descriptions-animate-out');
					$('#right-middle').toggle('descriptions-animate-out');
					$('#right-bottom').toggle('descriptions-animate-out');
					$('#designer-venn-button').toggle('circle-animate-out');
					$('#developer-venn-button').toggle('circle-animate-out');
					$('.mainpagetext').animateCss('fadeIn');
				}
			}

			else if(prevSlideIndex == 1 && nextSlideIndex == 2) {
				$('#developer-side-bar').animate({left: '50%', opacity: '0', width: '50vw'});
				$('.designerpage-elements').animateCss('fadeOut zoomOut');
				$('#headings-ds').animate({top: '15rem'});
				$('#horizontalrule-ds').animate({width: '0%'});
				$('.bordertextds').hide();
				setTimeout(delay12, 500);
				function delay12(){
					$(pages[prevSlideIndex]).removeClass('selected');
					$(pages[nextSlideIndex]).addClass('selected');
					$('#headings-dv').animate({top: '14rem'});
					$('#horizontalrule-dv').animate({width: '6.5%'});
					$('#designer-side-bar').animate({left: '0', opacity: '0.85', width: '10vw'});
					$('.developerpage-elements').animateCss('zoomIn fadeIn');
					$('.bordertext-dv').show();
				}
			}

			else if (prevSlideIndex == 2 && nextSlideIndex == 1) {
				$('#designer-side-bar').animate({left: '0', opacity: '0', width: '50vw'});
				$('.developerpage-elements').animateCss('zoomOut fadeOut');
				$('#horizontalrule-dv').animate({width: '0%'});
				$('#headings-dv').animate({top: '15rem'});
				$('.bordertext-dv').hide();
				setTimeout(delay21, 500);
				function delay21(){
					$(pages[prevSlideIndex]).removeClass('selected');
					$(pages[nextSlideIndex]).addClass('selected');
					$('#headings-ds').animate({top: '14rem'});
					$('#horizontalrule-ds').animate({width: '6.5%'});
					$('#developer-side-bar').animate({left:'90%', opacity: '0.75', width: '10vw'});
					$('.designerpage-elements').animateCss('fadeIn zoomIn');
					$('.bordertextds').show();
				}
			}

			else if (prevSlideIndex == 0 && nextSlideIndex == 3) {
				$('#designer-venn-button').toggle('circle-animate-in');
				$('#developer-venn-button').toggle('circle-animate-in');
				$('#left-top').toggle('descriptions-animate-in');
				$('#left-middle').toggle('descriptions-animate-in');
				$('#left-bottom').toggle('descriptions-animate-in');
				$('#right-top').toggle('descriptions-animate-in');
				$('#right-middle').toggle('descriptions-animate-in');
				$('#right-bottom').toggle('descriptions-animate-in');
				$('.bordertext-dv').show();
				$('.alumni-heading').hide();
				$('.alumni-map').hide();
				$('.svgs').hide();
				$('.nav-up-container').show();
				setTimeout(delay03, 300);
				function delay03() {
					$(pages[prevSlideIndex]).removeClass('selected');
					$(pages[nextSlideIndex]).addClass('selected');
					$('.alumni-heading').show().animateCss('fadeIn');
					setTimeout(domino1, 200);
					function domino1(){
						$('.alumni-map').show().animateCss('fadeIn');
					}
					setTimeout(domino2, 600);
					function domino2() {
						$('.svgs').show().animateCss('zoomIn');
					}
				}
			}

			else if (prevSlideIndex == 3 && nextSlideIndex == 0) {
				$('.alumnilocationpage-elements').animateCss('fadeOut');
				$('.svgs').animateCss('fadeOut zoomOut');
				$('.nav-up-container').hide();
				setTimeout(delay30, 400);
				function delay30() {
					$(pages[prevSlideIndex]).removeClass('selected');
					$(pages[nextSlideIndex]).addClass('selected');
					$('#left-top').toggle('descriptions-animate-out');
					$('#left-middle').toggle('descriptions-animate-out');
					$('#left-bottom').toggle('descriptions-animate-out');
					$('#right-top').toggle('descriptions-animate-out');
					$('#right-middle').toggle('descriptions-animate-out');
					$('#right-bottom').toggle('descriptions-animate-out');
					$('#designer-venn-button').toggle('circle-animate-out');
					$('#developer-venn-button').toggle('circle-animate-out');
					$('.mainpagetext').animateCss('fadeIn');
				}
			}

			else if(prevSlideIndex == 4 && nextSlideIndex == 3) {
				$('.alumni-member').animateCss('fadeOut');
				$('.alumni-member-animate-class').animateCss('zoomOut');
				$('.alumni-heading').hide();
				$('.alumni-location').hide();
				$('.nav-cross-container').hide();
				$('.svgs').hide();
				$('.nav-up-container').show();
				setTimeout(delay43, 300);
				function delay43() {
					$(pages[prevSlideIndex]).removeClass('selected');
					$(pages[nextSlideIndex]).addClass('selected');
					$('.alumni-heading').show().animateCss('fadeIn');
					setTimeout(domino1, 200);
					function domino1(){
						$('.alumni-location').show().animateCss('fadeIn');
					}
					setTimeout(domino2, 600);
					function domino2() {
						$('.svgs').show().animateCss('zoomIn');
					}
				}
			}
			else if (prevSlideIndex == 3 && nextSlideIndex == 4) {
				$('.alumnilocationpage-elements').animateCss('fadeOut');
				$('.svgs').animateCss('zoomOut');
				$('.nav-cross-container').show();
				setTimeout(delay34, 300);
				function delay34() {
					$(pages[prevSlideIndex]).removeClass('selected');
					$(pages[nextSlideIndex]).addClass('selected');
					$('.alumni-member').animateCss('fadeIn');
					$('.alumni-member-animate-class').animateCss('zoomIn');
				}
			}
			else if(prevSlideIndex == 5 && nextSlideIndex == 3) {
				$('.alumni-member').animateCss('fadeOut');
				$('.alumni-member-animate-class').animateCss('zoomOut');
				$('.alumni-heading').hide();
				$('.alumni-location').hide();
				$('.nav-cross-container').hide();
				$('.svgs').hide();
				$('.nav-up-container').show();
				setTimeout(delay43, 300);
				function delay43() {
					$(pages[prevSlideIndex]).removeClass('selected');
					$(pages[nextSlideIndex]).addClass('selected');
					$('.alumni-heading').show().animateCss('fadeIn');
					setTimeout(domino1, 200);
					function domino1(){
						$('.alumni-location').show().animateCss('fadeIn');
					}
					setTimeout(domino2, 600);
					function domino2() {
						$('.svgs').show().animateCss('zoomIn');
					}
				}
			}
			else if (prevSlideIndex == 3 && nextSlideIndex == 5) {
				$('.alumnilocationpage-elements').animateCss('fadeOut');
				$('.svgs').animateCss('zoomOut');
				$('.nav-cross-container').show();
				setTimeout(delay34, 300);
				function delay34() {
					$(pages[prevSlideIndex]).removeClass('selected');
					$(pages[nextSlideIndex]).addClass('selected');
					$('.alumni-member').animateCss('fadeIn');
					$('.alumni-member-animate-class').animateCss('zoomIn');
				}
			}
			else if (prevSlideIndex == 4 && nextSlideIndex == 0) {
				$('.alumni-member').animateCss('fadeOut');
				$('.alumni-member-animate-class').animateCss('zoomOut');
				$('.alumni-heading').hide();
				$('.alumni-location').hide();
				$('.nav-cross-container').hide();
				$('.svgs').hide();
				$('.nav-up-container').hide();
				setTimeout(delay40, 400);
				function delay40() {
					$(pages[prevSlideIndex]).removeClass('selected');
					$(pages[nextSlideIndex]).addClass('selected');
					$('#left-top').toggle('descriptions-animate-out');
					$('#left-middle').toggle('descriptions-animate-out');
					$('#left-bottom').toggle('descriptions-animate-out');
					$('#right-top').toggle('descriptions-animate-out');
					$('#right-middle').toggle('descriptions-animate-out');
					$('#right-bottom').toggle('descriptions-animate-out');
					$('#designer-venn-button').toggle('circle-animate-out');
					$('#developer-venn-button').toggle('circle-animate-out');
					$('.mainpagetext').animateCss('fadeIn');
				}
			}
			else if (prevSlideIndex == 0 && nextSlideIndex == 4) {
				$('#designer-venn-button').animateCss('fadeIn zoomIn');
				$('.mainpage-elements').animateCss('fadeIn');
				$('#developer-venn-button').animateCss('fadeIn zoomIn');
				setTimeout(delay04, 400);
				function  delay04() {
					$(pages[prevSlideIndex]).removeClass('selected');
					$(pages[nextSlideIndex]).addClass('selected');
					$('.alumni-member').animateCss('fadeIn');
					$('.alumni-member-animate-class').animateCss('zoomIn');
				}
			}
			else if (prevSlideIndex == 5 && nextSlideIndex == 0) {
				$('.alumni-member').animateCss('fadeOut');
				$('.alumni-member-animate-class').animateCss('zoomOut');
				$('.alumni-heading').hide();
				$('.alumni-location').hide();
				$('.nav-cross-container').hide();
				$('.svgs').hide();
				$('.nav-up-container').hide();
				setTimeout(delay40, 400);
				function delay40() {
					$(pages[prevSlideIndex]).removeClass('selected');
					$(pages[nextSlideIndex]).addClass('selected');
					$('#left-top').toggle('descriptions-animate-out');
					$('#left-middle').toggle('descriptions-animate-out');
					$('#left-bottom').toggle('descriptions-animate-out');
					$('#right-top').toggle('descriptions-animate-out');
					$('#right-middle').toggle('descriptions-animate-out');
					$('#right-bottom').toggle('descriptions-animate-out');
					$('#designer-venn-button').toggle('circle-animate-out');
					$('#developer-venn-button').toggle('circle-animate-out');
					$('.mainpagetext').animateCss('fadeIn');
				}
			}
			else if (prevSlideIndex == 0 && nextSlideIndex == 5) {
				$('#designer-venn-button').animateCss('fadeIn zoomIn');
				$('.mainpage-elements').animateCss('fadeIn');
				$('#developer-venn-button').animateCss('fadeIn zoomIn');
				setTimeout(delay04, 400);
				function  delay04() {
					$(pages[prevSlideIndex]).removeClass('selected');
					$(pages[nextSlideIndex]).addClass('selected');
					$('.alumni-member').animateCss('fadeIn');
					$('.alumni-member-animate-class').animateCss('zoomIn');
				}
			}
			slide = nextSlideIndex;
		}

		function removeClasses(index) {
		}

		var navClick = {
			down : function() {
				matchUrl(pageUrls[3]);
			},
			up : function() {
				matchUrl(pageUrls[0]);
			},
			cross : function() {
				matchUrl(pageUrls[0]);
			},
			crossre : function() {
				matchUrl(pageUrls[3]);
			},
			ds : function() {
				matchUrl(pageUrls[1]);
			},
			dv : function() {
				matchUrl(pageUrls[2]);
			},
			dsbar : function() {
				matchUrl(pageUrls[1]);
			},
			logoicon : function() {
				matchUrl(pageUrls[0]);
			},
			dvbar : function() {
				matchUrl(pageUrls[2]);
			},
			numsvg : function() {
				matchUrl(pageUrls[4]);
			},
			numsvgusa : function() {
				matchUrl(pageUrls[5]);
			}
		}

		navUpButton.on('click', navClick.up);
		navDownButton.on('click', navClick.down);
		crossButton.on('click', navClick.cross);
		crossButtonRe.on('click', navClick.crossre);
		designerVennButton.on('click', navClick.ds);
		developerVennButton.on('click', navClick.dv);
		designerSideBar.on('click', navClick.dsbar);
		developerSideBar.on('click', navClick.dvbar);
		svgIcon.on('click', navClick.numsvg);
		svgIconUsa.on('click', navClick.numsvgusa);
		logo.on('click', navClick.logoicon);
		matchUrl(pathname);
	});
