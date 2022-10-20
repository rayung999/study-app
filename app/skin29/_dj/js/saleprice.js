$(document).ready(function() {
    var salecompare = $('#sale_compare');

    var value_original_price = parseInt(document.getElementById("passdata_original_price").textContent, 10);
    var value_sale_price = parseInt(document.getElementById("passdata_sale_price").textContent, 10);
    
    if (value_original_price === value_sale_price || value_original_price === 0 ) {
        var result = "판매가";
    }
    else {
    	var result = "특별 할인가";
    }
	salecompare.append(result);
})