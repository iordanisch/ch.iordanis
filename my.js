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

  $('#joojojasd').hide();

 $(window).scroll(function() {

  var scroll = $(window).scrollTop();

  if (scroll >=900) {

  
  $('#joojojasd').fadeIn();

  } else {

 
  $('#joojojasd').fadeOut();

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
        ($('#navbarid').fadeIn(3000));
    ($('.headerbox').fadeIn(3000));
    ($('.process').fadeIn(3000));
    
   
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



//carousel
$("#carousel-1").carousel({
  interval: 3000
});

$("#carousel-1.carousel .carousel-item").each(function() {
  const total = 3;
  let next = $(this).next();

  for (var i = 0; i < total - 1; i++) {
    if (!next.length) {
      next = $(this).siblings(":first");
    }
    next
      .children(":first-child")
      .clone()
      .appendTo($(this));
    next = next.next();
  }
});


/*Progress icons*/
lucide.createIcons();


 /* Form Validation*/
  (function () {
  "use strict";
 

  // Fetch all the forms we want to apply custom validation styles to
  const forms = document.querySelectorAll(".needs-validation");
  const result = document.getElementById("result");
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();

          form.querySelectorAll(":invalid")[0].focus();
        } else {
          /*
           * Form Submission using fetch()
           */

          const formData = new FormData(form);
          event.preventDefault();
          event.stopPropagation();
          const object = {};
          formData.forEach((value, key) => {
            object[key] = value;
          });
          const json = JSON.stringify(object);
          result.style.display = "block";
          result.innerHTML = "Please wait...";

          fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
          })
            .then(async (response) => {
              let json = await response.json();
              if (response.status == 200) {
                result.innerHTML = json.message;
                result.classList.remove("text-gray-500");
                result.classList.add("text-green-500");
              } else {
                console.log(response);
                result.innerHTML = json.message;
                result.classList.remove("text-gray-500");
                result.classList.add("text-red-500");
              }
            })
            .catch((error) => {
              console.log(error);
              result.innerHTML = "Something went wrong!";
            })
            .then(function () {
              form.reset();
              form.classList.remove("was-validated");
              setTimeout(() => {
                result.style.display = "none";
              }, 5000);
            });
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();
