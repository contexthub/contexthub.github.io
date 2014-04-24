$(document).ready(function() {  
	var stickyNavTop = $('.side-nav-mobile').offset().top;  
	  
	var stickyNav = function(){  
	    var scrollTop = ($(window).scrollTop())+0;

	if (scrollTop > stickyNavTop) {   
	    $('.side-nav-mobile').addClass('sticky-side-nav-mobile');
	    // $('#getting-started').addClass('add-margin-top');

		} else {  
		    $('.side-nav-mobile').removeClass('sticky-side-nav-mobile');   
		   	// $('#getting-started').addClass('add-margin-top');
		}  
	};  
	    
	$(window).scroll(function() {  
	    stickyNav();  
	});  
});