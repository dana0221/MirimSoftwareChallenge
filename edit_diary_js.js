$(function(){
	$('#plus').on('mouseover', function(){
		$('#plus img').css({
			opacity:'0.5'
		});
	})
	.on('mouseout',function(){
		$('#plus img').css({
			opacity:'1'
		});
	});

	$('#new_diary').on('mouseover', function(){
		$(this).css({
			backgroundColor:'#504B57'
		});
	})
	.on('mouseout',function(){
		$(this).css({
			backgroundColor:'#403C45'
		});
	});

    $('#plus').on('click', function(){
        if(confirm("작성하고 있는 내용이 사라집니다. 이동하시겠습니까?") == true){
            location = './code_page.html'
        }
    });

	$('#create_diary').on('click', function(){
        if(confirm("코드를 잊으면 다시 찾을 수 없습니다. 꼭 기억해두세요!") == true){
            location = './diary_page.html'
        }
    });
});