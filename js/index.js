//左侧导航到顶部固定
$(function(){
	topheight = $('.jump').offset().top;//左侧导航距离顶部的位置
	$('.jump').css('top',topheight);
	var on_scroll = function(){
		s3 = $(document).scrollTop();//滚动条滚动的高度
		if(s3 > topheight){
			if($.browser.msie && $.browser.version == '6.0'){
				$('.jump').css('top',$(window).scrollTop());
				
			}else{
				$('.jump').css('top','0');
				$('.jump').css('position','fixed');
			}
		}else{
			$('.jump').css('top',topheight);
			$('.jump').css('position','absolute');
		}
		
		//滚动时图标文字改变样式
		$('.main-item').each(function(){		
			var n = $(".main-item").index($(this));
			var m = $(this).offset().top;
			if($(document).scrollTop()>m-100){
				$(".skip .text").removeClass("active");
				$(".skip i").removeClass("active");
                $('.skip .text:eq('+ n +')').addClass("active")
                $('.skip i:eq(' + n + ')').addClass("active")
			}else{}
		})		
	}
	$(window).scroll(on_scroll);
	on_scroll();
})

$(window).scroll(function(){
	var tops = $(window).scrollTop();
	var heights = $(".footer").offset().top;
	var windows = $(window).height();
	if($(window).scrollTop()>=1000){
		$(".jump").show();
	}else{
		$(".jump").show();
	}if(tops>=heights-windows){
		$(".jump").hide()
	}
})


//点击跳转到相应位置
$(function(){
	$(".fixed-left1").click(function(e){
	e.preventDefault();
	miao($(".obg"));
})
$(".fixed-left2").click(function(e){
	e.preventDefault();
	miao($(".oof"));
})
$(".fixed-left3").click(function(e){
	e.preventDefault();
	miao($(".qua"));
})
$(".fixed-left4").click(function(e){
	e.preventDefault();
	miao($(".ots"));
})
$(".fixed-left5").click(function(e){
	e.preventDefault();
	miao($(".ffp"));
})
$(".fixed-left6").click(function(e){
	e.preventDefault();
	miao($(".ppuor"));
})
$(".fixed-left7").click(function(e){
	e.preventDefault();
	miao($(".wanab"));
})
$(".fixed-left8").click(function(e){
	e.preventDefault();
	miao($(".eacs"));
})
$(".fixed-left9").click(function(e){
	e.preventDefault();
	miao($(".nmr"));
})
$(".fixed-left10").click(function(e){
	e.preventDefault();
	miao($(".rar"));
})
function miao(els){
	var el_top = els.offset().top -20;
	$("html,body").animate({
		scrollTop:el_top
	},800)
}
})

