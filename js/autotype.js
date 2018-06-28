!(function(){
	var textArr=['QianYuanJia','Creative','Experienced']
	var idx=0;
	setInterval(function(){
		$('.text_mutation').addClass('hide')
		idx++
		if(idx==6){
			idx=0
		}
		// $('.text_mutation').html(textArr[idx==6?0:Math.floor(idx/2)])
		$('.text_mutation').eq(idx).removeClass('hide')
	},4000)

})()