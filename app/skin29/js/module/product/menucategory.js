
/* 관리자 분류 리스트 표시 설정에 대한 대응 */

$(function(){ 
    if($(".xans-product-displaycategory").length==14){ /* 카테고리 갯수가 15개면 미출력 - 한글자음갯수  */
         $(".brand_list").hide();
    };
});


$(function(){ 
    if($(".xans-product-displaycategory").length==26){ /* 카테고리 갯수가 26개면 미출력 - 알파벳갯수  */
         $(".brand_list").hide();
    };
});

