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



$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 900) {
    $('.TopButton').fadeIn();
  } else {
    $('.TopButton').fadeOut();
      }
});

$(document).ready( function() {
    $("#atestbox").hide(); //hide your div initially
    var topOfOthDiv = $("#askills").offset().top;
    $(window).scroll(function() {
        if($(window).scrollTop() > topOfOthDiv) { //scrolled past the other div?
            $("#atestbox").show(); //reached the desired point -- show div
        }
    });
});