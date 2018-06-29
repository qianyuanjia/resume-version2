!(function(){
	var frameNum=0;
	var flag=-1
	function floatMove(){
		frameNum++
		if(frameNum%20==0){
			flag*=-1
			var bot=flag*5+70
			$('.start footer').animate({
				bottom:bot
			},400,'swing')
		}

		window.requestAnimationFrame(floatMove)
	}
	floatMove()
})()