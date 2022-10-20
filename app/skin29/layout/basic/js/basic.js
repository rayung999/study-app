
/**
 *  썸네일 이미지 엑박일경우 기본값 설정
 */
$(window).load(function() {
    $("img.thumb,img.ThumbImage,img.BigImage").each(function($i,$item){
        var $img = new Image();
        $img.onerror = function () {
        $item.src="//img.echosting.cafe24.com/thumb/img_product_big.gif";
        }
        $img.src = this.src;
    });
});

$(document).ready(function(){
    function soldCountCheck() {
        $('.soldCount .count').each(function(i){
            var targetCount = $(this);
            var countText = targetCount.text();
            var textCheck = countText.replace(/\,/g,'');
            var qtyCheck = parseInt(textCheck);
            if(qtyCheck >= 100){ //사용자 지정 노출 갯수 설정 (ex: 100개 이상 노출)
                targetCount.parent('.soldCount').show();
            }
        });
    }soldCountCheck();
});