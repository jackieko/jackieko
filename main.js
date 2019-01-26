function scrollToHome() {
	 var topOfDiv = $('#div-1').offset().top; // this "offset".top means that it gets the top of the div
	 console.log(topOfDiv);
	 console.log("Hello!");

	 $('body').animate({scrollTop: topOfDiv}, 1000);
	 // select the entire body and animate what we're going to do next; animate has two pieces of info where and how long for it to take
}

function scrollToAbout() {
	 var topOfDiv = $('#div-2').offset().top; // this "offset".top means that it gets the top of the div
	 console.log(topOfDiv);
	 console.log("Hello!");

	 $('body').animate({scrollTop: topOfDiv}, 1000);
	 // select the entire body and animate what we're going to do next; animate has two pieces of info where and how long for it to take
}

function scrollToWork() {
	 var topOfDiv = $('#div-3').offset().top; // this "offset".top means that it gets the top of the div
	 console.log(topOfDiv);
	 console.log("Hello!");

	 $('body').animate({scrollTop: topOfDiv}, 1000);
	 // select the entire body and animate what we're going to do next; animate has two pieces of info where and how long for it to take
}

function scrollToContact() {
	 var topOfDiv = $('#div-4').offset().top; // this "offset".top means that it gets the top of the div
	 console.log(topOfDiv);
	 console.log("Hello!");

	 $('body').animate({scrollTop: topOfDiv}, 1000);
	 // select the entire body and animate what we're going to do next; animate has two pieces of info where and how long for it to take
}

function fadeImageIn() {
	$('#div-2').fadeIn(2000);
	// number in milliseconds
}

$(window).scroll(function () {

        /* Check the location of each desired element */
        $('.about-info').each(function (i) {

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object) {

                $(this).animate({
                    'opacity': '1'
                }, 500);

            }

        });

    });