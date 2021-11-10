//모니터 화면 맞춤
function leftOpen() {
    $('#timelinbx').css("width", $(window).width() - 280);
}
function leftClose() {
    $('#timelinbx').css("width", "100%");
}
 
$(window).resize(function() {        
    $('.timelinbx').css('width', $(window).width() - 50 );        
    $('.timelinbx').css('height', $(window).height() - 50 );   
})

// 메뉴화면 마우스오버
$(function(){
	$('#plus img').on('mouseover', function(){
		$(this).css({
			opacity:'0.5'
		});
	})
	.on('mouseout',function(){
		$(this).css({
			opacity:'1'
		});
	});

	$('.input_diary').on('mouseover', function(){
		$(this).css({
			opacity:'0.5'
		});
	})
	.on('mouseout',function(){
		$(this).css({
			opacity:'1'
		});
	});

	$('.input_diary').on('click', function(){
		location = './diary_page.html'
	});
});

// 스크롤 바
function leftOpen() {
    $('#timelinbx').css("width", $(window).width() - 280);
}
function leftClose() {
    $('#timelinbx').css("width", "100%");
}
 
$(window).resize(function() {        
    $('.timelinbx').css('width', $(window).width() - 50 );        
    $('.timelinbx').css('height', $(window).height() - 50 );   
});


$(document).ready(function(){
	fullset();
	quickClick(); 
});

// 슬라이드
function fullset(){
	var footerpate = $("#footer");
	var pageindex = $("#main > .slide_page").size();
	for(var i=1;i<=pageindex;i++){ $("#main > .quick > ul").append("<li></li>"); }
	$("#main .quick ul :first-child").addClass("on");
	$(window).bind("mousewheel", function(event){ var page = $(".quick ul li.on");

	// 버튼 스크롤
	$(function(){
		$('.down').on('click', function(){
			$("#main").animate({"top": -720 + "px"},1000, "swing"); 
		});

		$('.up').on('click', function(){
			pageindex.index() - 1;
		})
	});

	if($("body").find("#main:animated").length >= 1) return false;
	if(event.originalEvent.wheelDelta >= 0) {
		var before=page.index(); if(page.index() >= 0) page.prev().addClass("on").siblings(".on").removeClass("on");
		var pagelength=0; for(var i=1; i<(before); i++) {
			pagelength += $(".page"+i).height();
		} 
		if(page.index() > 0){
			page=page.index()-1;
			$("#main").animate({"top": -pagelength + "px"},1000, "swing"); 
		}
		}else{
			var nextPage=parseInt(page.index()+1);
			var lastPageNum=parseInt($(".quick ul li").size());
			if(page.index() <= $(".quick ul li").size()-1){
				page.next().addClass("on").siblings(".on").removeClass("on");
			}
				if(nextPage < lastPageNum){
				var pagelength=0; 
				for(var i = 1; i<(nextPage+1); i++){
					pagelength += $(".page"+i).height(); 
				} $("#main").animate({"top": -pagelength + "px"},1000, "swing"); 
			}else{
				$("body").animate({"bottom": 0 + "px"},1000, "swing"); 
			};
		} 
	});

	$(window).resize(function(){ 
		var resizeindex = $(".quick ul li.on").index()+1; var pagelength=0; 
			for(var i = 1; i<resizeindex; i++){
				pagelength += $(".page"+i).height();
			} $("#main").animate({"top": -pagelength + "px"},0); 
		}); 
	}
	function quickClick(){ 
		$(".quick li").click(function(){ 
			var gnbindex = $(this).index()+1; 
			var length=0; 
			for(var i=1; i<(gnbindex); i++) { 
				length+=$(".page"+i).height(); 
			} if($("body").find("#main:animated").length >= 1) 
				return false;
			$(this).addClass("on").siblings("li").removeClass("on");
			$("#main").animate({"top": -length + "px"},800, "swing");
		return false; 
	}); 
}