jQuery(document).ready(function($){
	
	var slide = 0;
	var routes ={
		"designerpage": "designerpage",
		"/developerpage": "developerpage",
		"alumnilocationpage": "alumnilocationpage",
		"alumnipage": "alumnipage",
		"/": "root"
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
	var crossButton = $('#cross-button');
	var pageContainer = $('.page-container');
	var designerSideBar = $('#designer-side-bar');
	var developerSideBar = $('#developer-side-bar');
	var svgIcon = $('#svg-icon');

	var pages = pageContainer.children('.page');

	function matchUrl(url){
		for (var index in routes)
		{
			if(url==index)
			{
				if(url != document.location.pathname) {
					window.history.pushState(null, null, url);
				}
				for(var key in pageUrls){
					if(pageUrls[key] === index){
						updateSlide(parseInt(slide), parseInt(key));
					}
				}
				break;
			}
		}
	}

	function display(index) {
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
		matchUrl(document.location.href);
	}

	function firstPage(){
		$(pages[0]).addClass('selected');
	}

	function updateSlide(prevSlideIndex, nextSlideIndex) {

		if(prevSlideIndex == 0 && nextSlideIndex == 1) {
			$(pages[nextSlideIndex]).addClass('fade-in-ds');
			$(pages[prevSlideIndex]).addClass('fade-away-ds');
			$(pages[prevSlideIndex]).removeClass('selected');
			$(pages[nextSlideIndex]).addClass('selected');
		}

		else if(prevSlideIndex == 0 && nextSlideIndex == 2) {
			$(pages[nextSlideIndex]).addClass('fade-in-dv');
			$(pages[prevSlideIndex]).addClass('fade-away-dv');
			$(pages[prevSlideIndex]).removeClass('selected');
			$(pages[nextSlideIndex]).addClass('selected');
		}

		else if(prevSlideIndex == 1 && nextSlideIndex == 2) {
			$(pages[nextSlideIndex]).addClass('enter-right-dv');
			$(pages[prevSlideIndex]).addClass('leave-right-ds');
			$(pages[prevSlideIndex]).removeClass('selected');
			$(pages[nextSlideIndex]).addClass('selected');
		}

		else if (prevSlideIndex == 2 && nextSlideIndex == 1) {
			$(pages[nextSlideIndex]).addClass('enter-left-ds');
			$(pages[prevSlideIndex]).addClass('leave-left-dv');
			$(pages[prevSlideIndex]).removeClass('selected');
			$(pages[nextSlideIndex]).addClass('selected');
		}

		else if (prevSlideIndex == 0 && nextSlideIndex == 3 || prevSlideIndex == 3 && nextSlideIndex == 0) {
			$(pages[nextSlideIndex]).addClass('fade-in');
			$(pages[prevSlideIndex]).addClass('fade-away');
			$(pages[prevSlideIndex]).removeClass('selected');
			$(pages[nextSlideIndex]).addClass('selected');
		}

		else if (prevSlideIndex == 4 && nextSlideIndex == 0) {
			$(pages[prevSlideIndex]).addClass('fade-away');
			$(pages[nextSlideIndex]).addClass('fade-in');
			$(pages[prevSlideIndex]).removeClass('selected');
			$(pages[nextSlideIndex]).addClass('selected');
		}

		setTimeout(function() {
			removeClasses(prevSlideIndex);
			removeClasses(nextSlideIndex);
		}, 500);

		slide = nextSlideIndex;

		if(slide == 0) {
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
		}
	}

	function removeClasses(index) {
		$(pages[index]).removeClass('fade-in-ds');
		$(pages[index]).removeClass('fade-in-dv');
		$(pages[index]).removeClass('fade-in-dv');
		$(pages[index]).removeClass('fade-away-dv');
		$(pages[index]).removeClass('fade-away');
		$(pages[index]).removeClass('fade-in');
		$(pages[index]).removeClass('enter-left-ds');
		$(pages[index]).removeClass('enter-right-dv');
		$(pages[index]).removeClass('leave-left-dv');
		$(pages[index]).removeClass('leave-right-ds');
	}

	var navClick = {
		down : function() {
			matchUrl(pageUrls[3]);
			display(3);
		},
		up : function() {
			matchUrl(pageUrls[0]);
			display(0);
		},
		cross : function() {
			matchUrl(pageUrls[0]);
			display(0);
		},
		ds : function() {
			matchUrl(pageUrls[1]);
			display(1);
		},	
		dv : function() {
			matchUrl(pageUrls[2]);
			display(2);
		},
		dsbar : function() {
			matchUrl(pageUrls[1]);
			display(1);
		},
		dvbar : function() {
			matchUrl(pageUrls[2]);
			display(2);
		},
		numsvg : function() {
			matchUrl(pageUrls[4]);
			display(4);
		}

	}

	navUpButton.on('click', navClick.up);
	navDownButton.on('click', navClick.down);
	crossButton.on('click', navClick.cross);
	designerVennButton.on('click', navClick.ds);
	developerVennButton.on('click', navClick.dv);
	designerSideBar.on('click', navClick.dsbar);
	developerSideBar.on('click', navClick.dvbar);
	svgIcon.on('click', navClick.numsvg);

	firstPage();
});
