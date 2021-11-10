// 이미지, 버튼 마우스오버
$(function(){
	$('#image').on('mouseover', function(){
		$(this).css({
			textDecoration:'underline'
		});
	})
	.on('mouseout',function(){
		$(this).css({
			textDecoration:'none'
		});
	});

	$('.btn').on('mouseover', function(){
		$(this).css({
			backgroundColor:'#49444F'
		})
	})
	.on('mouseout', function(){
		$(this).css({
			backgroundColor:'#423F45'
		})
	});

	$('#new').on('mouseover', function(){
		$(this).css({
			backgroundColor:'#8E8896'
		})
	})
	.on('mouseout', function(){
		$(this).css({
			backgroundColor:'#AFABB5'
		})
	});
});