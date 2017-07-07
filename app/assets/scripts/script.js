jQuery(document).ready(function($){
	var slide = 0;

	var routes ={
		/*"/mainpage": "mainpage",*/
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

	window.onpopstate =function(event) {
		matchUrl(document.location.href);
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

		else if(slide == 1 || slide ==2) {
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
		},
		up : function() {
			matchUrl(pageUrls[0]);
		},
		cross : function() {
			matchUrl(pageUrls[0]);
		}
	}

	navUpButton.on('click', navClick.up);
	navDownButton.on('click', navClick.down);
	crossButton.on('click', navClick.cross);

	

})