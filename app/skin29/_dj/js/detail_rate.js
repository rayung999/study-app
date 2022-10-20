$(document).ready(function() {
    var insertdiv = $('#fake_review_rate');

    var count = parseInt(document.getElementById("passdata").textContent, 10);
    
    if (count <= 2 && count > 0 ) {
        var newRate = count + 2;
    }
    else if (count == 3) {
        var newRate = count + 1;
    }
    else if (count > 3) {
    	var newRate = 5;
    }
    else {
    	var newRate = 0;
    }
	insertdiv.append('<img src="//img.echosting.cafe24.com/skin/base/board/ico_point' + newRate + '.gif" alt="' + newRate +'점">');
})