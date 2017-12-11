$(function(){

	//表单控件提示显隐
	if($(".textWrap .tip").length > 0){
		inputTip();
	}

	//online侧边栏
	if($('.backTop').length != 0){
		online();
	}

	//头部微信二维码显隐
	$("#topWx").hover(function(){
		$(this).find(".wx").show().stop().animate({opacity:1})
	}, function(){
		$(this).find(".wx").stop().animate({opacity:0}, function(){
			$(this).hide()
		})
	})

	//头部导航固定
	if($(".indexBnr").length > 0){
		navFixed();
		$(window).scroll(function(){
			navFixed();
		})
	}
	$("#topSearch").click(function(){
		$("#searchPop").addClass("block");
	})
	$("#searchClose").click(function(){
		$("#searchPop").removeClass("block");
	})

	//首页banner切换
	if($(".bnrList").length > 0){		
	   $.rollItem({listElm:".bnrList",triggerElm:"#bnrCtl>span",prevElm:"#bnrPrev",nextElm:"#bnrNext",stopElm:"#bnrPrev, #bnrNext, #bnrCtl>span",moveUnit:1440,interval:3000,speed:700,tfc:"easeInOutQuad"});
	}
	
		//臻品案例banner切换
	if($(".ProbnrList").length > 0){		
	   $.rollItem({listElm:".ProbnrList",triggerElm:"#bnrCtl>span",prevElm:"#bnrPrev",nextElm:"#bnrNext",stopElm:"#bnrPrev, #bnrNext, #bnrCtl>span",moveUnit:798,interval:8000,speed:700,tfc:"easeInOutQuad"});
	}
	
	   //臻品案例 内页 banner切换
	if($(".Probnrpage").length > 0){		
	   $.rollItem({listElm:".Probnrpage",triggerElm:"#bnrCtl>span",prevElm:"#bnrPrev",nextElm:"#bnrNext",stopElm:"#bnrPrev, #bnrNext, #bnrCtl>span",moveUnit:1200,interval:8000,speed:700,tfc:"easeInOutQuad"});
	}
	

	//首页案例展示切换
	if($(".caseImgs").length > 0){
		$.toggleFade({fadeElm:".caseImgs",crlElm:".caseTabs>li",fadeClass:"caseImgsCur",interval:10000,speed:1500,auto:false});
		var minW;
		var caseCtlPos = function(){
			if($(window).width() < 1900){
				minW = $(window).width() > 1440 ? $(window).width() : 1440;
				$(".casePrev, .caseNext").show();				
				$(".casePrev").css({"left":(1920-minW)/2+30});
				$(".caseNext").css({"right":(1920-minW)/2+120});
			}
			else{
				$(".casePrev, .caseNext").hide();
			}
			$(".caseImgs").animate({"left":0},600)
		}
		caseCtlPos();
		$(window).resize(function(){
			caseCtlPos();
		})
		$(".casePrev").click(function(){
			$(".caseImgs").animate({"left":(1920-minW)/2},600)
		})
		$(".caseNext").click(function(){
			$(".caseImgs").animate({"left":(minW-1920)/2},600)
		})
	}

	
	//首页设计师切换
	if($(".indexdesignList").length > 0){
		$.rollItem({listElm:".indexdesignList",prevElm:".indexdesignPrev",nextElm:".indexdesignNext",stopElm:".indexdesignPrev, .indexdesignNext",moveUnit:315,interval:8000,speed:600,tfc:"swing"});
	}
	
	
	//首页新闻观点切换
	if($(".indexNewsList").length > 0){
		$.rollItem({listElm:".indexNewsList",prevElm:".indexNewsPrev",nextElm:".indexNewsNext",stopElm:".indexNewsPrev, .indexNewsNext",moveUnit:435,interval:8000,speed:600,tfc:"swing"});
	}
	
	//设计（1）团队切换
	if($(".desList01").length > 0){
		$.rollItem({listElm:".desList01",prevElm:".desPrev",nextElm:".desNext",stopElm:".desPrev, .desNext",moveUnit:256,interval:8000,speed:600,tfc:"swing"});
	}
	//设计（2）团队切换
	if($(".desList02").length > 0){
		$.rollItem({listElm:".desList02",prevElm:".desPrev",nextElm:".desNext",stopElm:".desPrev, .desNext",moveUnit:256,interval:8000,speed:600,tfc:"swing"});
	}
	//设计（3）团队切换
	if($(".desList03").length > 0){
		$.rollItem({listElm:".desList03",prevElm:".desPrev",nextElm:".desNext",stopElm:".desPrev, .desNext",moveUnit:256,interval:8000,speed:600,tfc:"swing"});
	}
	


	//首页设计团队切换
	if($(".teamWrapList").length > 0){
		$.toggleFade({fadeElm:".teamWrap",prevElm:".teamPrev",nextElm:".teamNext",fadeClass:"teamWrapCur",interval:10000,speed:1500});
	}

	//专属服务动画
	if($(".indexServiceImg").length > 0){
		$(window).bind('scroll', function(){
			if($(document).scrollTop() > 4200){
				$(".indexServiceList>li").eq(0).animate({"left":0,"opacity":1},1000)
				setTimeout(function(){
					$(".indexServiceList>li").eq(1).animate({"left":0,"opacity":1},1000)
				},300)
				setTimeout(function(){
					$(".indexServiceList>li").eq(2).animate({"left":0,"opacity":1},1000)
				},600)
				setTimeout(function(){
					$(".indexServiceList>li").eq(3).animate({"left":0,"opacity":1},1000)
				},900)
				$(".indexServiceImg").animate({"right":0,"opacity":1},1200)
				setTimeout(function(){
					$(".cir1").addClass("ant");
					setTimeout(function(){
						$(".cir1").removeClass("ant");
					},2500)
				},1000)			
				setTimeout(function(){
					$(".cir2").addClass("ant");
					setTimeout(function(){
						$(".cir2").removeClass("ant");
					},2500)
				},5000)		
				setTimeout(function(){
					$(".cir3").addClass("ant");
					setTimeout(function(){
						$(".cir3").removeClass("ant");
					},2500)
				},9000)		
				setTimeout(function(){
					$(".cir4").addClass("ant");
					setTimeout(function(){
						$(".cir4").removeClass("ant");
					},2500)
				},13000)		
				setTimeout(function(){
					$(".cir5").addClass("ant");
					setTimeout(function(){
						$(".cir5").removeClass("ant");
					},2500)
				},17000)
				setTimeout(function(){
					$(".cir6").find(".c").addClass("ant");
					$(".cir6").find(".c img").addClass("ant");
					setTimeout(function(){
						$(".cir6").find(".c").removeClass("ant");
						$(".cir6").find(".c img").removeClass("ant");
					},2500)
				},21000)
			}
		})
	}

	//设计师预约
	if($(".designerTab").length > 0){
		$(".tabBtns>li").click(function(){
			$(this).tabClass("sel");
			$(".designerTab .tabCnt").eq($(this).index()).tabClass("block");
		})
	}
	
})

//导航固定位置
function navFixed(){
	var scrollTop = $(window).scrollTop();
	if(scrollTop >= 0){
		$("body").addClass("scrollFixed");
	}
	else{
		$("body").removeClass("scrollFixed");
	}
}

//页面loading动画
function overLay() {
	$(".overLay").animate({opacity:0},function(){
		$(this).hide(function(){
			$("body").addClass("pageLoaded");
		});
	})
}

//inputTip输入框提示
function inputTip(){
	$('.textWrap .text').each(function(){
		$(this).val() != "" ? $(this).siblings(".tip").hide() : "";
	})
	$('.textWrap .text, .textWrap .tip').bind('click', function(){
		var parElm = $(this).parent();
		if(parElm.find(".tip").length != 0){
			parElm.find(".text").focus();
		}
	}).bind('focus', function(){
		var parElm = $(this).parent();
		if(parElm.find(".tip").length != 0){
			parElm.find(".tip").hide();
		}
	}).bind('blur', function(){
		var _this = $(this);
		if(_this.siblings(".tip").length != 0){
			var thisVal = _this.val().replace(/\s/g, "");
			if(thisVal == "" || thisVal == null){
				_this.siblings(".tip").show();
			}
		}
	})
}

//online侧边栏
function online(){
	//返回顶部
	$(".backTop").click(function(){
		$("html, body").animate({ scrollTop: 0 }, 120);
	});
	//微信二维码显示
	$("#shareWx").hover(function(){
		$(this).siblings(".wx").show().stop().animate({opacity:1})
	}, function(){
		$(this).siblings(".wx").stop().animate({opacity:0}, function(){
			$(this).hide()
		})
	})
	onlineResetPos();
	$(window).scroll(function(){
		onlineResetPos();
	})
}
//online重置位置
function onlineResetPos(){
	var bottom = $(document).height()-$(window).height()-$(document).scrollTop();
	bottom <= 131 ? bottom = 131 : "";
	$(".backTop").css("bottom",bottom);
}

//通用alert
function alert(msg){
    var maskElm = $('<section />').addClass('popMask').appendTo('body');
    var alertElm = $('<section />').addClass('popAlert').appendTo('body');
    var messageElm = $('<div />').addClass('popCnt').text(msg || '').appendTo(alertElm);
    var yesElm = $('<span />').addClass('popBtn').text('确定').appendTo(alertElm);
    maskElm.show();
    alertElm.show();
    maskElm.add(yesElm).bind('click', function(){
        maskElm.stop().animate({opacity:0}, function(){
            $(this).remove();
        })
        alertElm.stop().animate({opacity:0}, function(){
            $(this).remove();
        })
    })
}

//通用验证
function checkForm(form){
	var returnVal = true;  //表单是否可提交
    var formElm = $(form);  //验证的当前表单
    var submitItems = formElm.find("[name]");  //表单所有提交项

    submitItems.each(function(i,item){
    	if($(item).attr("data-tipNull")){  //为必填项
    		if($(item).attr("type") == "text" || $(item).attr("type") == "password" || $(item)[0].tagName == "SELECT" || $(item)[0].tagName == "TEXTAREA"){
		    	var itemVal = $(item).val().replace(/\s/g, "");
		    	if(itemVal == "" || itemVal == null){
		    		alert($(item).attr("data-tipNull"));
		    		returnVal = false;
		            return false;
		    	}
		    }
		    if($(item).attr("type") == "radio" || $(item).attr("type") == "checkbox"){
				if(!formElm.find('[name="'+$(item).attr("name")+'"]:checked').val()){
					alert($(item).attr("data-tipNull"));
		    		returnVal = false;
		            return false;
				}
			}
    	}
    	if($(item).attr("data-reg")){  //填写不符合正则规则
    		var itemVal = $(item).val().replace(/\s/g, "");
    		if(itemVal != "" && itemVal != null){
	    		var regu = eval($(item).attr("data-reg"));
		        var re = new RegExp(regu);
		        if (!re.test(itemVal)) {
		            alert($(item).attr("data-tipReg"));
		            returnVal = false;
		            return false;
		        }
	    	}
    	}
    	//两次输入不一致(仅限一个比较项)
    	if(submitItems.filter("[data-same]").length > 0){
	    	var itemSameVal1 = submitItems.filter("[data-same]").eq(0).val().replace(/\s/g, "");
	    	var itemSameVal2 = submitItems.filter("[data-same]").eq(1).val().replace(/\s/g, "");  	
	    	if(itemSameVal1 != "" && itemSameVal2 != "" ){  
	    		if(itemSameVal1 != itemSameVal2){
	    			alert(submitItems.filter("[data-same]").eq(1).attr("data-tipSame"));
	    			returnVal = false;
	    			return false;
	    		}
	    	}
	    }
    }) 

    return returnVal;
}

jQuery.extend({

	rollItem : function(opt){
		var triggerElm = $(opt.triggerElm);
		var prevElm = $(opt.prevElm);
		var nextElm = $(opt.nextElm);
		var listElm = opt.listElm;
		var stopElm = opt.stopElm;
		var interval = opt.interval || 8000;
		var direction = opt.direction || "horizontal";
		var moveUnit = opt.moveUnit ;
		var speed = opt.speed || 600;
		var tfc = opt.tfc || "easeInOutExpo";
		var loop = opt.loop || true;
		var auto = opt.auto || true;
		var showNum = opt.showNum;
		var length = $(listElm).children().size();
		var curIndex = 0;
		var slideLock = false;

		if(length <= showNum){
			prevElm.hide();
			nextElm.hide();
		}
		else{
			triggerElm.first().tabClass("sel");
			direction == "horizontal" ? $(listElm).css({"left":"-"+moveUnit+"px"}) : $(listElm).css({"top":"-"+moveUnit+"px"}) ;
			for(var i = 0; i < length; i ++){
				$(listElm).append($(listElm).children().eq(i).clone())
			}
	        $(listElm).prepend($(listElm).children().last());

			var slideQueue = function(dir,index){
				if(!slideLock){
					slideLock = true;	
					var _listElm = $(listElm);
					if(dir == "next"){
						if(direction == "horizontal"){			
							_listElm.stop().animate({"left":"-="+moveUnit},speed,tfc,function(){	
								_listElm.append($(listElm).children().first());
								_listElm.css({"left":"-"+moveUnit+"px"});					
								slideLock = false;
							});
						}
						if(direction == "vertical"){			
							_listElm.stop().animate({"top":"-="+moveUnit},speed,tfc,function(){		
								_listElm.append($(listElm).children().first());
								_listElm.css({"top":"-"+moveUnit+"px"});
								slideLock = false;
							});
						}
					}
					if(dir == "prev"){
						if(direction == "horizontal"){			
							_listElm.prepend($(listElm).children().last());
							_listElm.css({"left":"-="+moveUnit+"px"});
							_listElm.stop().animate({"left":"-"+moveUnit},speed,tfc,function(){		
								slideLock = false;
							});
						}
						if(direction == "vertical"){			
							_listElm.prepend($(listElm).children().last());
							_listElm.css({"top":"-="+moveUnit+"px"});
							_listElm.stop().animate({"top":"-"+moveUnit},speed,tfc,function(){		
								slideLock = false;
							});
						}
					}
					if(dir == "pos"){
						toggleCtl(index);	
						if(index > curIndex){		
							if(direction == "horizontal"){			
								_listElm.stop().animate({"left":"-="+moveUnit*(index-curIndex)},speed,tfc,function(){
									_listElm.append($(listElm).children().filter(":lt("+(index-curIndex)+")"));
									_listElm.css({"left":"-"+moveUnit+"px"});
									curIndex = index;				
									slideLock = false;
								});
							}
							if(direction == "vertical"){			
								_listElm.stop().animate({"top":"-="+moveUnit*(index-curIndex)},speed,tfc,function(){		
									_listElm.append($(listElm).children().filter(":lt("+(index-curIndex)+")"));
									_listElm.css({"top":"-"+moveUnit+"px"});
									curIndex = index;
									slideLock = false;
								});
							}
						}
						else if(index < curIndex){
							if(direction == "horizontal"){			
								_listElm.prepend($(listElm).children().filter(":gt("+(index-curIndex-1)+")"));
								_listElm.css({"left":"-="+moveUnit*(curIndex-index)+"px"});
								_listElm.stop().animate({"left":"-"+moveUnit},speed,tfc,function(){	
									curIndex = index;					
									slideLock = false;
								});
							}
							if(direction == "vertical"){			
								_listElm.prepend($(listElm).children().filter(":gt("+(index-curIndex-1)+")"));
								_listElm.css({"top":"-="+moveUnit*(curIndex-index)+"px"});
								_listElm.stop().animate({"top":"-"+moveUnit},speed,tfc,function(){	
									curIndex = index;					
									slideLock = false;
								});
							}
						}
					}
				}
			}

			var isVpt = function(dir){
				if(dir == "next"){
					if(loop || curIndex < length - 1 ){
						return true;
					}
					else{
						return false;
					}
				}
				else if(dir == "prev"){
					if(loop || curIndex > 0 ){
						return true;
					}
					else{
						return false;
					}
				}
			}

			var toggleCtl = function(idx){
				if(!loop){
					curIndex <= 0 ? prevElm.hide() : prevElm.show();				
					curIndex >= length - 1 ? nextElm.hide() : nextElm.show();
				}
				triggerElm.eq(idx).tabClass("sel");
			}

			triggerElm.click(function(){
				var idx = $(this).index();
				if(idx != curIndex){
					slideQueue("pos",idx);
				}
			});
			prevElm.click(function(){
				if(isVpt("prev") && !slideLock){
					curIndex = curIndex <= 0 ? (length - 1) : (curIndex - 1) ;
					slideQueue("prev");
					toggleCtl(curIndex);
				}
			});
			nextElm.click(function(){
				if(isVpt("next") && !slideLock){
					curIndex = curIndex >= (length - 1) ? 0 : (curIndex + 1) ;
					slideQueue("next");
					toggleCtl(curIndex);
				}
			});

			if(auto){
				var autoSt = setInterval(function(){
					if(isVpt("next") && !slideLock){
						curIndex = curIndex >= (length - 1) ? 0 : (curIndex + 1) ;
						slideQueue("next");
						toggleCtl(curIndex);
					}
				},interval);
				$(stopElm).mouseover(function(){
					clearInterval(autoSt);
				}).mouseout(function(){
					autoSt = setInterval(function(){
						if(isVpt("next") && !slideLock){
							curIndex = curIndex >= (length - 1) ? 0 : (curIndex + 1) ;
							slideQueue("next");
							toggleCtl(curIndex);
						}
					},interval);
				});
			}

			toggleCtl(curIndex);
		}
	}

})