//smooth scrolling
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});



// arrow apear after scrolling
$(function() {

  $('#atestbox').hide();

 $(window).scroll(function() {

  var scroll = $(window).scrollTop();

  if (scroll >=900) {

  
  $('#atestbox').fadeIn();

  } else {

 
  $('#atestbox').fadeOut();

 }

  });

})



//nice opening
setTimeout(function () {
    $('body').addClass('loaded');
  }, 200);



//fade in effect for nav and header content
$(document).ready(function () {
   if ($('body').hasClass('loaded'));
    else
        ($('#navbarid').fadeIn(5000));
    ($('.headerbox').fadeIn(5000));
   ($('.askills').fadeIn(5000));
});



$(document).ready(function(){
  $("body").mouseup(function(){ 
  	 $("#demo").hasClass('in');{
  	 	$('.mobile-nav-box').addClass('mob-but-men');
  	 }
  });
});

//mobile menu icon
$(document).ready(function(){
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
	});
});

//slide down menu
$(document).ready(function(){
  $("#nav-icon3").click(function(){
    $("#demo").slideToggle("slow");
  });
});

