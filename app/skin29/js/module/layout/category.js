
/**
 * 카테고리 마우스 오버 이미지
 * 카테고리 서브 메뉴 출력
 */

$(document).ready(function(){
    var methods = {
        aCategory    : [],
        aSubCategory : {},

        get: function()
        {
             $.ajax({
                url : '/exec/front/Product/SubCategory',
                dataType: 'json',
                success: function(aData) {

                    if (aData == null || aData == 'undefined') return;
                    for (var i=0; i<aData.length; i++)
                    {
                        var sParentCateNo = aData[i].parent_cate_no;

                        if (!methods.aSubCategory[sParentCateNo]) {
                            methods.aSubCategory[sParentCateNo] = [];
                        }

                        methods.aSubCategory[sParentCateNo].push( aData[i] );
                    }
                }
            });
        },

        getParam: function(sUrl, sKey) {

            var aUrl         = sUrl.split('?');
            var sQueryString = aUrl[1];
            var aParam       = {};

            if (sQueryString) {
                var aFields = sQueryString.split("&");
                var aField  = [];
                for (var i=0; i<aFields.length; i++) {
                    aField = aFields[i].split('=');
                    aParam[aField[0]] = aField[1];
                }
            }
            return sKey ? aParam[sKey] : aParam;
        },

        view: function(overNode, iCateNo) {
            if($('.sub_'+iCateNo).length == 0 && $.isEmptyObject(methods.aSubCategory[iCateNo]) == true){
                return;
            }
            
            var aHtml = [];
            aHtml.push('<ul>');
            $(methods.aSubCategory[iCateNo]).each(function() {
                aHtml.push('<li id="'+this.name+'"><a href="/'+this.design_page_url+this.param+'">'+this.name+'</a></li>');
            });
            aHtml.push('</ul>');
            aHtml.push('<div class="sub_img">');
            aHtml.push($('.sub_'+iCateNo).html());
            aHtml.push('</div>');

            var offset = $(overNode).offset();
            $('<div class="sub-category"></div>').stop().fadeIn(0)
                .appendTo(overNode)
                .html(aHtml.join(''))
                .find('li').mouseenter(function(e) {
                    $this=$(this).addClass('over');
                    var iCateNo2 = Number(methods.getParam($this.find('a').attr('href'), 'cate_no'));
                    if (!iCateNo2) {
                         return;
                    }
                    methods.now2($this, iCateNo2);
                }).mouseleave(function(e) {
                    $(this).removeClass('over');
                    $(this).find('.sub2').remove();
                });
        },

        view2: function(overNode, iCateNo) {
            if (methods.aSubCategory[iCateNo].length == 0) {
                return;
            }

            var bHtml = [];
            bHtml.push('<ul>');
            $(methods.aSubCategory[iCateNo]).each(function() {
                bHtml.push('<li><a href="/'+this.design_page_url+this.param+'">'+this.name+'</a></li>');
            });
            bHtml.push('</ul>');

            $('<div class="sub2"></div>')
                .appendTo(overNode)
                .html(bHtml.join(''))
                .find('li').mouseover(function(e) {
                    $(this).addClass('over');
                }).mouseout(function(e) {
                    $(this).removeClass('over');
                });
        },
        
        close: function() {
            $('.sub-category').remove();
        }
    };
    methods.get();
    $('.xans-layout-category li').mouseenter(function(e) {
          var $this = $(this).addClass('on'),
          iCateNo = Number(methods.getParam($this.find('a').attr('href'), 'cate_no'));
          if (!iCateNo) {
               return;
          }
          methods.view($this, iCateNo);
     }).mouseleave(function(e) {
          $(this).removeClass('on');
          methods.close();
     });
});



$(document).ready(function(){

    var methods = {
        aCategory    : [],
        aSubCategory : {},

        get: function()
        {
             $.ajax({
                url : '/exec/front/Product/SubCategory',
                dataType: 'json',
                success: function(aData) {

                    if (aData == null || aData == 'undefined') return;
                    for (var i=0; i<aData.length; i++)
                    {
                        var sParentCateNo = aData[i].parent_cate_no;

                        if (!methods.aSubCategory[sParentCateNo]) {
                            methods.aSubCategory[sParentCateNo] = [];
                        }

                        methods.aSubCategory[sParentCateNo].push( aData[i] );
                    }
					methods.Category_Menu_Print(); 
					methods.Category_All_Print();
                }
            });
        },

        getParam: function(sUrl, sKey) {

            var aUrl         = sUrl.split('?');
            var sQueryString = aUrl[1];
            var aParam       = {};

            if (sQueryString) {
                var aFields = sQueryString.split("&");
                var aField  = [];
                for (var i=0; i<aFields.length; i++) {
                    aField = aFields[i].split('=');
                    aParam[aField[0]] = aField[1];
                }
            }
            return sKey ? aParam[sKey] : aParam;
        },

        show: function(overNode, iCateNo) {
            if (methods.aSubCategory[iCateNo].length == 0) {
				alert("b:"+iCateNo);
                return;
            }

            var aHtml = [];
            aHtml.push('<ul>');
            $(methods.aSubCategory[iCateNo]).each(function() {
                aHtml.push('<li><a href="/'+this.design_page_url+this.param+'">'+this.name+'</a></li>');
            });
            aHtml.push('</ul>');

            var offset = $(overNode).offset();
            $('<div class="sub-category"></div>')
                .appendTo(overNode)
                .html(aHtml.join(''))
                .find('li').mouseover(function(e) {
                    $(this).addClass('over');
                }).mouseout(function(e) {
                    $(this).removeClass('over');
                });

        },

        close: function() {
            $('.sub-category').remove();
        },
		
        
        
        Category_Menu_Print: function() {

			$('#sub_m li').each(function() {

				var iCateNo = Number(methods.getParam($(this).find('a').attr('href'), 'cate_no'));
				var iCount = $(methods.aSubCategory[iCateNo]).length;
				if (iCount == 0) { return; }

				var aHtml = [];
				aHtml.push('<ul class="sub_m">');
				$(methods.aSubCategory[iCateNo]).each(function() {
					aHtml.push('<li><a href="/'+this.design_page_url+this.param+'">'+this.name+'</a></li>');
				});
				aHtml.push('</ul>');
				$(aHtml.join('')).appendTo(this);

			});

        },


        Category_All_Print: function() {

			$('#all_cate li').each(function() {
				
				var aHtml = [];
				var dep = 2;
				var iCateNo = Number(methods.getParam($(this).find('a').attr('href'), 'cate_no'));
				var iCount = $(methods.aSubCategory[iCateNo]).length;
				$(this).addClass("all_cate_Sub");
				if (iCount > 0) {
					aHtml = methods.Category_All_Call(aHtml,dep,iCateNo);
					$(aHtml.join('')).appendTo(this);
				} else {
					return;
				}

			});

        },

        Category_All_Call: function(aHtml,dep,iCateNo) {
			var nowClass = "sub_cate_" + dep;
			var nowClassSub = "sub_cate_" + dep + "_slist";
			aHtml.push('<ul class="'+nowClass+'">');

			$(methods.aSubCategory[iCateNo]).each(function() {
				
				var jCateNo = this.cate_no;
				var iCount = $(methods.aSubCategory[jCateNo]).length;

				aHtml.push('<li class="'+nowClassSub+'"><a href="/'+this.design_page_url+this.param+'">'+this.name+'</a>');
				
				if (iCount > 0 && dep < 2) {
					dep = dep + 1;
					aHtml = methods.Category_All_Call(aHtml,dep,jCateNo);
					dep = dep - 1;
				}

				aHtml.push('</li>');

			});
			
			aHtml.push('</ul>');

			return aHtml;

        }
    };

    methods.get();

	$('.xans-layout-category ul.Category_List li').mouseenter(function(e) {

		var $this = $(this).addClass('on'),
		iCateNo = Number(methods.getParam($this.find('a').attr('href'), 'cate_no'));
		if (!iCateNo) { return; }
		methods.show($this, iCateNo);

	}).mouseleave(function(e) {

		$(this).removeClass('on');
		methods.close();

	});

});
