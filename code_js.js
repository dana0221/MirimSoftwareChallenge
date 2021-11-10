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

    $('#plus').on('click', function(){
        if(confirm("작성하고 있는 내용이 사라집니다. 이동하시겠습니까?") == true){
            location = './main_page.html'
        }
    })
});