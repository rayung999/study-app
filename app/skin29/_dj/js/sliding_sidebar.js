$(document).ready(function() {
    // If the 'hide cookie is not set we show the message
  if (!readCookie('hide')) {
      $('#slidingSidebar').show();
      setTimeout(popup, 1000 * 10);
  }
	$('.slider-arrow').click(function(){
        if($(this).hasClass('show')){
	    //$( ".slider-arrow, .panel" ).animate({
            $( " .panel" ).animate({
          left: "+=300"
		  }, 100, function() {
            // Animation complete.
          });
		  $(this).html('&lsaquo;').removeClass('show').addClass('hide');
        }
        else {   	
	    //$( ".slider-arrow, .panel" ).animate({
            $( ".panel" ).animate({
          left: "-=300"
		  }, 100, function() {
            // Animation complete.
          });
		  $(this).html('&rsaquo;').removeClass('hide').addClass('show');    
        }
    });
  setInterval(popup, 1000 * 60 * 10);

});


function popup() {
 if($('.slider-arrow').hasClass('show')){
	    //$( ".slider-arrow, .panel" ).animate({
            $( " .panel" ).animate({
          left: "+=300"
		  }, 100, function() {
            // Animation complete.
          });
		  $('.slider-arrow').html('&lsaquo;').removeClass('show').addClass('hide');
        }
        else {   	
	    //$( ".slider-arrow, .panel" ).animate({
            $( ".panel" ).animate({
          left: "-=300"
		  }, 100, function() {
            // Animation complete.
          });
		  $('.slider-arrow').html('&rsaquo;').removeClass('hide').addClass('show');    
        }

    createCookie('hide', true, 1)
}



function createCookieSec(name,value,sec) {
  if (sec) {
    var date = new Date();
    date.setTime(date.getTime()+(sec*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else var expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}



// ---
// And some generic cookie logic
// ---
function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else var expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function eraseCookie(name) {
  createCookie(name,"",-1);
}