$(document).ready(function() {
    var insertdiv = $('#fake_review_rate');
    var count = parseInt(document.getElementById("passdata").textContent, 10);
    var newRate = 3;
    
    if (count <= 20 && count > 0 ) {
        newRate = 0;
    }
    else if ( count%4 == 0 ) {
    	newRate = 4;
    }
    else {
        newRate = 5;
    }
    
	insertdiv.append('<img src="//img.echosting.cafe24.com/skin/base/board/ico_point' + newRate + '.gif" alt="' + count +'점">');
})