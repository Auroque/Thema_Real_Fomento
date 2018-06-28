
var $doc = $('html, body');
$('a').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 130
    }, 500);
    return false;
});



// MENU RETRATIL
	$(window).scroll(function() {				
	     if($(this).scrollTop()<150){
	     	$('.top_menu').fadeOut();
	     }else{
	     	$('.top_menu').fadeIn();
	     }
	});