jQuery(document).ready(function($) {
	
	var slide = 0;
	var routes = {
		"/": "root",
		"/designerpage": "designerpage",
		"/developerpage": "developerpage",
		"/alumnilocationpage": "alumnilocationpage",
		"/alumnipage": "alumnipage"

	};

	var pageUrls = {
		0 : "/",
		1 : "/designerpage",
		2 : "/developerpage",
		3 : "/alumnilocationpage",
		4 : "/alumnipage"
	};

	var designerVennButton = $('#designer-venn-button');
	var developerVennButton = $('#developer-venn-button');
	var navUpButton = $('#nav-up-button');
	var navDownButton = $('#nav-down-button');
	var crossButton = $('.cross-button');
	var crossButtonRe = $('.cross-button-re');
	var pageContainer = $('.page-container');
	var designerSideBar = $('#designer-side-bar');
	var developerSideBar = $('#developer-side-bar');
	var svgIcon = $('#svg-icon');
	var mainpageElements = $('.mainpage-elements');
	var designerpageElements = $('.designerpage-elements');
	var developerpageElements = $('.developerpage-elements');
	var alumnilocationpageElements = $('.alumnilocationpage-elements');
	var alumnipageElements = $('.alumnipage-elements');

	var pages = pageContainer.children('.page');

	function matchUrl(url){
		console.log(url);
		for (var index in routes)
		{
			if(url==index)
			{	
				if(url != document.location.pathname) {
					window.history.pushState(null, null, url);
				}
				for(var key in pageUrls){
					if(pageUrls[key] === index){
						console.log("Selected key");
						updateSlide(parseInt(slide), parseInt(key));
						break;
					}
				}
			}
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

	window.onpopstate =function(event) {
		console.log(window.location.host);
		matchUrl('/designerpage');
	}

	function firstPage(){
		$(pages[0]).addClass('selected');
	}

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
		console.log(prevSlideIndex);
		console.log(nextSlideIndex);

		if(prevSlideIndex === 0 && nextSlideIndex === 1) {
			$('#designer-venn-button').animateCss('fadeOut zoomOut');
			$('.mainpage-elements').animateCss('fadeOut');
			$('#developer-venn-button').animateCss('fadeOut zoomOut');
			setTimeout(delay01, 700);
			function delay01(){
			$(pages[prevSlideIndex]).removeClass('selected');
			$(pages[nextSlideIndex]).addClass('selected');
			$('.designerpage-elements').animateCss('zoomIn');
			$('#developer-side-bar').animateCss('fadeInLeft').animateCss('slideInLeft');
		}
	}

		else if(prevSlideIndex == 1 && nextSlideIndex == 0) {
			$('.designerpage-elements').animateCss('zoomOut');
			$('#developer-side-bar').animateCss('fadeOutLeft');
			setTimeout(delay10, 300);
			function delay10(){
			$(pages[prevSlideIndex]).removeClass('selected');
			$(pages[nextSlideIndex]).addClass('selected');
			$('#designer-venn-button').animateCss('fadeIn zoomIn');
			$('.mainpage-elements').animateCss('fadeIn');
			$('#developer-venn-button').animateCss('fadeIn zoomIn');
		}
	}

		else if(prevSlideIndex == 0 && nextSlideIndex == 2) {
			$('#developer-venn-button').animateCss('fadeOut zoomOut');
			$('.mainpage-elements').animateCss('fadeOut');
			$('#designer-venn-button').animateCss('fadeOut zoomOut');
			setTimeout(delay02, 700);
			function delay02(){
			$(pages[prevSlideIndex]).removeClass('selected');
			$(pages[nextSlideIndex]).addClass('selected');
			$('.developerpage-elements').animateCss('zoomIn');
			$('#designer-side-bar').animateCss('fadeInRight').animateCss('slideInRight');
		}
	}

		else if(prevSlideIndex == 2 && nextSlideIndex == 0) {
			$('.developerpage-elements').animateCss('zoomOut');
			$('#designer-side-bar').animateCss('fadeOutRight');
			setTimeout(delay20, 300);
			function delay20(){
			$(pages[prevSlideIndex]).removeClass('selected');
			$(pages[nextSlideIndex]).addClass('selected');
			$('#developer-venn-button').animateCss('fadeIn zoomIn');
			$('.mainpage-elements').animateCss('fadeIn');
			$('#designer-venn-button').animateCss('fadeIn zoomIn');
		}
	}

		else if(prevSlideIndex == 1 && nextSlideIndex == 2) {

			setTimeout(delay12, 300);
			function delay12(){
			$(pages[prevSlideIndex]).removeClass('selected');
			$(pages[nextSlideIndex]).addClass('selected');
		}
	}

		else if (prevSlideIndex == 2 && nextSlideIndex == 1) {

			setTimeout(delay21, 300);
			function delay21(){
			$(pages[prevSlideIndex]).removeClass('selected');
			$(pages[nextSlideIndex]).addClass('selected');
		}
	}

		else if (prevSlideIndex == 0 && nextSlideIndex == 3) {

			setTimeout(delay03, 300);
			function delay03() {
			$(pages[prevSlideIndex]).removeClass('selected');
			$(pages[nextSlideIndex]).addClass('selected');
		}
	}

		else if (prevSlideIndex == 3 && nextSlideIndex == 0) {

			setTimeout(delay30, 300);
			function delay30() {
			$(pages[prevSlideIndex]).removeClass('selected');
			$(pages[nextSlideIndex]).addClass('selected');

		}
	}

		else if(prevSlideIndex == 4 && nextSlideIndex ==3) {

			setTimeout(delay43, 300);
			function delay43() {
			$(pages[prevSlideIndex]).removeClass('selected');
			$(pages[nextSlideIndex]).addClass('selected');
		}
	}

		else if (prevSlideIndex == 3 && nextSlideIndex == 4) {

			setTimeout(delay34, 300);
			function delay34() {
			$(pages[prevSlideIndex]).removeClass('selected');
			$(pages[nextSlideIndex]).addClass('selected');
		}
	}

		/*setTimeout(function() {
			removeClasses(prevSlideIndex);
			removeClasses(nextSlideIndex);
		}, 500);*/

		slide = nextSlideIndex;

		/*if(slide == 0) {
			navDownButton.show();
			navUpButton.hide();
			crossButton.hide();
		}

		else if(slide == 1 || slide == 2) {
			crossButton.show();
			navDownButton.hide();
			navUpButton.hide();
		}

		else if(slide == 3) {
			navUpButton.show();
			navDownButton.hide();
			crossButton.hide();
		}*/
	}

	function removeClasses(index) {
		/*$(pages[index]).removeClass('fade-in-ds');
		$(pages[index]).removeClass('fade-in-dv');
		$(pages[index]).removeClass('fade-in-dv');
		$(pages[index]).removeClass('fade-away-dv');
		$(pages[index]).removeClass('fade-away');
		$(pages[index]).removeClass('fade-in');
		$(pages[index]).removeClass('enter-left-ds');
		$(pages[index]).removeClass('enter-right-dv');
		$(pages[index]).removeClass('leave-left-dv');
		$(pages[index]).removeClass('leave-right-ds');*/
	}

	var navClick = {
		down : function() {
			matchUrl(pageUrls[3]);
			/*display(3);*/
		},
		up : function() {
			matchUrl(pageUrls[0]);
			/*display(0);*/
		},
		cross : function() {
			matchUrl(pageUrls[0]);
			/*display(0);*/
			
		},
		crossre : function() {
			matchUrl(pageUrls[3]);
			/*display(3);*/
		},
		ds : function() {
			matchUrl(pageUrls[1]);
			/*display(1);*/
		},	
		dv : function() {
			matchUrl(pageUrls[2]);
			// display(2);
		},
		dsbar : function() {
			matchUrl(pageUrls[1]);
			/*display(1);*/
		},
		dvbar : function() {
			matchUrl(pageUrls[2]);
			/*display(2);*/
		},
		numsvg : function() {
			matchUrl(pageUrls[4]);
			/*display(4);*/
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

	firstPage();
});
