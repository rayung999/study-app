(function(){

    var insertdiv = $('#fake_purchase_count');

    var count = parseInt(document.getElementById("passDataCount").textContent, 10);
    var newValue = 0;
    
    if (count <= 0 ) {
        newValue = count + 1;
    }
    else if (count < 10 ) {
        newValue = (count*1.5) + 10;
    }
    else if (count < 100 ) {
        newValue = (count*2) + 100;
    }
    else {
    	newValue = (count*3) + 50;
    }
	insertdiv.append( parseInt(newValue) );
})
