$(window).load(function() {
	beLazy();
	global();

});

$(document).on('pjax:end', function() {
	beLazy();
	nextPrev();
	global();
	activeLink();
});

$(document).ready(function() {
	nextPrev();
	activeLink();
	if (window.history && window.history.pushState) {
		//if navigation is active remove the active classes when the backbutton is clicked
	    $(window).on('popstate', function() {
	      if($('#project-menu').hasClass('active')){
			setTimeout(function(){$('.bars').removeClass('active');},250);
			$('#project-menu, .page-wrap, header, footer, .next, .previous').removeClass('active');
			$('html').removeClass('fixed');
			$('html').removeClass('overflow');
			}
	    });
	}
	if (!Modernizr.svg) {
	    var imgs = document.getElementsByTagName('img');
	    var svgExtension = /.*\.svg$/;
	    var l = imgs.length;
	    for(var i = 0; i < l; i++) {
	        if(imgs[i].src.match(svgExtension)) {
	            imgs[i].src = imgs[i].src.slice(0, -3) + 'png';
	            console.log(imgs[i].src);
	        }
	    }
	}
});

global = function(){
	$('.nano').nanoScroller({
   		preventPageScrolling: true,
   		iOSNativeScrolling: true
  	});
	if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
		$('.front-page').addClass('background');
	}
	if (Modernizr.touch) {
    $('html').removeClass('no-touch');
	}
	else{
		$('html').addClass('no-touch');
	}
}

//********************Next/Previous Arrow Hovers********************//
nextPrev = function(){
	$('.next')
  		.mouseover(function() {
    	$('html').addClass('hover-next-project');
  	})
  	.mouseout(function() {
   		$('html').removeClass('hover-next-project');
  	});
  	$('.previous')
  	.mouseover(function() {
    	$('html').addClass('hover-previous-project');
     if($('html').hasClass('fixed')){
    		$('html').removeClass('hover-previous-project');
    		$('.previous').bind('click', false);
    }
    else{
    		$('.previous').unbind('click', false);
    	}
  })
  .mouseout(function() {
   		$('html').removeClass('hover-previous-project');
	});
}

//********************bLazy Image Loader********************//
beLazy = function(){
			var bLazy = new Blazy({
			container: '.image-wrapper', // Default is window
			breakpoints: [{
	        width: 420 // max-width
		, src: 'data-src-small'
	     }
           , {
	          width: 768 // max-width
	        , src: 'data-src-medium'}
	          , {
	          width: 1120 // max-width
	        , src: 'data-src-large'
		}]
	});
}

//********************Title Interval********************//
var titles = ['is a designer','loves type','thinks less is more','follows function','ama burritos','plays with HTML/CSS','likes hedgehogs'];

function rotateTitle() {
  var ct = $('#title a').data('titles') || 0;
  $('#title a').data('titles', ct == titles.length -1 ? 0 : ct + 1).html('Regis <span class=\'interests\'>'+ titles[ct] +'</span>').fadeIn()
              .delay(5000).fadeOut(500, rotateTitle);
}
$(rotateTitle);

//********************Off Canvas Thumbnail Menu********************//
$('.bar-menu').click(function(e){
	  scrollLock();
	if($('html').hasClass('progress')){
		e.preventDefault();
	}
	else{
      $('#project-menu').toggleClass('active');
      $('.page-wrap, #menu, footer, .next, .previous').toggleClass('active');

       setTimeout(function(){$('.bars').toggleClass('active');},250);

	if (navigator.userAgent.indexOf('Firefox') != -1){
		setTimeout(function(){$('html').toggleClass('overflow');},400);
	}
	else{
		$('html').toggleClass('overflow');
	}
      $('html').toggleClass('fixed');
      if($('html').hasClass('fixed')){
    		$('html').removeClass('hover-previous-project');
    		$('.projects a').bind('click', false);
    	}
    	else{
    		$('.projects a').unbind('click', false);
    	}
	}
});

scrollLock = function(){
	// Uses document because document will be topmost level in bubbling
	$(document).on('touchmove',function(e){
  		e.preventDefault();
  	if(!$('html').hasClass('fixed')){
  		$(document).unbind('touchmove');
 	}
	});

	var scrolling = false;

	// Uses body because jquery on events are called off of the element they are
	// added to, so bubbling would not work if we used document instead.
	$('body').on('touchstart','.scrollable',function(e) {

    	// Only execute the below code once at a time
    	if (!scrolling) {
        	scrolling = true;
        	if (e.currentTarget.scrollTop === 0) {
          		e.currentTarget.scrollTop = 1;
        	} else if (e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.offsetHeight) {
          		e.currentTarget.scrollTop -= 1;
        	}
       		scrolling = false;
    	}
	});

	// Prevents preventDefault from being called on document if it sees a scrollable div
	$('body').on('touchmove','.scrollable',function(e) {
  		e.stopPropagation();
	});
}

var activeLink = function(){
	var pgurl = window.location.href;
	$('nav ul li a, #menu a').each(function(){
		if($(this).attr('href') == pgurl){
			$(this).parent().addClass('active');
		}
		else{
			$(this).parent().removeClass('active');
		}
	});
}

//********************Pjax********************//
	$(document).on('pjax:timeout', function(event) {
  	// Prevent default timeout redirection behavior
  	event.preventDefault();
	});

	$(document).on('pjax:success', function() {
		ga('send','pageview');
	});

	$(document).on('click', 'a[data-pjax]', function(e){
		var location = window.location.href;
		var currentLink = $(this).attr('href');
		e.preventDefault();
		if (e.metaKey || e.ctrlKey) {
			window.open(this.href);
			return false;
        };
        if(location == currentLink){
			return false;
		}
		var href = $(this).attr('href');
		$('html').addClass('progress');
		$('#title a').addClass('loading');
	  	$('#loader').delay(300).fadeIn(300);
	  	setTimeout(function(){$('.bars').removeClass('active');},250);
	  	$('.page-wrap, header, footer, .next, .previous').removeClass('active');
		$('html').removeClass('fixed');
		if (navigator.userAgent.indexOf('Firefox') != -1){
			setTimeout(function(){$('html').removeClass('overflow');},200);
		}
		else{
			$('html').removeClass('overflow');
		}
		if($('#project-menu').hasClass('active')){
				$('.fade').delay(400).animate({
				opacity : 0
			}, 400, 'easeOutCirc', function() {
				$.pjax({
					url: href,
					container : '.load-container',
					fragment : '.load-container',
					timeout : 5000
				});
			});
		}
		else{
			$('.fade').animate({
				opacity : 0
			}, 400, 'easeOutCirc', function() {
				$.pjax({
					url: href,
					container : '.load-container',
					fragment : '.load-container',
					timeout : 5000
				});
			});
		};
		$('#project-menu').removeClass('active');
	});

	$(document).on('pjax:end', function() {
		$('.fade').css('opacity', '0');
		$('.fade').animate({opacity : 1},400, 'easeInCirc');
		$('html').removeClass('progress hover-next-project hover-previous-project');
		$('#title a').removeClass('loading');
	});

//********************Arrow Key Commands********************//
	$(document).keydown(function(e) {
		if($('.load-container').length)
		{
			switch(e.keyCode) {
				case 39:
					$('#next-project-arrow').trigger('click', true);
					return false;
				break;

				case 37:
					$('#previous-project-arrow').trigger('click', true);
					return false;
				break;
			}
		}
	});
